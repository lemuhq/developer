'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ApiCategory } from '@/app/api/apiData';

interface EditCategoryFormProps {
  categoryId: string;
}

export default function EditCategoryForm({ categoryId }: EditCategoryFormProps) {
  const router = useRouter();

  const [originalId, setOriginalId] = useState('');
  const [formData, setFormData] = useState({ id: '', name: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        setLoading(true);
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        
        const categories: ApiCategory[] = await response.json();
        const foundCategory = categories.find(c => c.id === categoryId);
        if (!foundCategory) throw new Error('Category not found');

        setFormData({
          id: foundCategory.id,
          name: foundCategory.name,
          description: foundCategory.description || ''
        });
        setOriginalId(foundCategory.id);
      } catch (err) {
        console.error('Error loading category:', err);
        setError(err instanceof Error ? err.message : 'Error loading category');
      } finally {
        setLoading(false);
      }
    }

    fetchCategory();
  }, [categoryId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
    setFormData(prev => ({ ...prev, id: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      if (!formData.id.trim() || !formData.name.trim()) {
        throw new Error('Category ID and name are required');
      }

      const resp = await fetch('/api/categories');
      if (!resp.ok) throw new Error('Failed to fetch current category data');

      const categories: ApiCategory[] = await resp.json();
      const current = categories.find(c => c.id === originalId);
      if (!current) throw new Error('Category not found');

      const categoryData = { ...formData, endpoints: current.endpoints || [] };
      const updateResp = await fetch('/api/categories/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalId, category: categoryData })
      });
      if (!updateResp.ok) {
        const ed = await updateResp.json();
        throw new Error(ed.error || 'Failed to update category');
      }

      router.push('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
      console.error('Error updating category:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const delResp = await fetch(`/api/categories?id=${originalId}`, { method: 'DELETE' });
      if (!delResp.ok) {
        const ed = await delResp.json();
        throw new Error(ed.error || 'Failed to delete category');
      }
      router.push('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
      console.error('Error deleting category:', err);
      setShowDeleteConfirm(false);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error && !formData.id) return <div><div>{error}</div><Link href="/admin">Return</Link></div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Category</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">ID *</label>
          <input type="text" name="id" value={formData.id} onChange={handleIdChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="flex items-center gap-4">
          <button type="submit" disabled={submitting} className="bg-blue-600 text-white px-4 py-2 rounded">{submitting ? 'Updating...' : 'Update'}</button>
          <Link href="/admin" className="text-gray-600 hover:text-gray-800">Cancel</Link>
        </div>
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded">
              <h2 className="font-bold mb-4">Confirm Delete</h2>
              <p className="mb-6">Are you sure you want to delete <strong>{formData.name}</strong>?</p>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setShowDeleteConfirm(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="button" onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
} 