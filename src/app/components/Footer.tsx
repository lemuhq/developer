import Link from 'next/link';
import Image from 'next/image';
import LemuLogo from '../../../public/lemulogo.png';

export default function Footer() {
  return (
    <footer className="bg-terminal-bg border-t border-terminal-border pt-10 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div>
              <Link href="/" className="text-xl font-mono text-accent-light flex items-center">
               <Image
                src={LemuLogo} 
                alt="Lemu API"
                className="h-8 w-auto" 
               
              />
                
              </Link>
              <p className="mt-3 text-terminal-text font-mono text-sm max-w-xs">
                Building powerful financial solutions for businesses of all sizes with our comprehensive API platform.
              </p>
            </div>
            {/* <div className="flex space-x-4">
              <a 
                href="https://twitter.com/lemuapi" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded bg-terminal-button hover:bg-accent-light hover:text-terminal-bg transition-all"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M13.6823 10.6218L20.2391 3H18.4778L12.8334 9.45636L8.45388 3H3L9.61275 12.3782L3 20H4.76131L10.4057 13.5436L14.7852 20H20.2391L13.6823 10.6218ZM11.3526 12.5782L10.4599 11.2955L5.55185 4.25H7.78873L11.7226 9.88364L12.6153 11.1664L17.68 18.4236H15.4431L11.3526 12.5782Z" />
                </svg>
              </a>
              <a 
                href="https://github.com/lemuapi" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded bg-terminal-button hover:bg-accent-light hover:text-terminal-bg transition-all"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.236-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.09-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a 
                href="https://discord.gg/lemuapi" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded bg-terminal-button hover:bg-accent-light hover:text-terminal-bg transition-all"
                aria-label="Discord"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.977-.608 1.414a17.76 17.76 0 0 0-5.487 0 12.598 12.598 0 0 0-.617-1.415.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.347-1.22.645-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.964 19.964 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* <div>
            <h3 className="text-terminal-comment font-mono text-sm mb-3"></h3>
            <ul className="space-y-1">
              <li>
                <Link href="/products/banking" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  banking_apis()
                </Link>
              </li>
              <li>
                <Link href="/products/payments" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  payments()
                </Link>
              </li>
              <li>
                <Link href="/products/verification" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  kyc_verification()
                </Link>
              </li>
              <li>
                <Link href="/products/dashboard" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  analytics_dashboard()
                </Link>
              </li>
              <li>
                <Link href="/products/enterprise" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  enterprise_solutions()
                </Link>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-terminal-comment font-mono text-sm mb-3"> Resources </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/docs" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  docs()
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  api_reference()
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  guides()
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  tutorials()
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  blog()
                </Link>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="text-terminal-comment font-mono text-sm mb-3">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  about_us()
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  careers()
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  contact()
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  privacy_policy()
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-terminal-text font-mono text-sm hover:text-accent-light transition-colors">
                  terms_of_service()
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="mt-8 pt-6 border-t border-terminal-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-terminal-text/60 font-mono">
              <span className="text-terminal-comment"># </span>© {new Date().getFullYear()} Lemu API. All rights reserved.
            </p>
            {/* <div className="mt-4 md:mt-0">
              <div className="inline-flex items-center p-1 rounded bg-terminal-button/20">
                <a 
                  href="/legal/privacy" 
                  className="px-2 py-1 text-xs font-mono text-terminal-text/80 hover:text-accent-light transition-colors"
                >
                  privacy()
                </a>
                <div className="w-px h-3 bg-terminal-border/30"></div>
                <a 
                  href="/legal/terms" 
                  className="px-2 py-1 text-xs font-mono text-terminal-text/80 hover:text-accent-light transition-colors"
                >
                  terms()
                </a>
                <div className="w-px h-3 bg-terminal-border/30"></div>
                <a 
                  href="/legal/cookies" 
                  className="px-2 py-1 text-xs font-mono text-terminal-text/80 hover:text-accent-light transition-colors"
                >
                  cookies()
                </a>
              </div>
            </div> */}
          </div>
          <p className="mt-4 text-xs text-center md:text-left text-terminal-text/40 font-mono">
            <span className="text-terminal-comment">{`// `}</span>Banking services provided by our banking partners who are CBN licensed.
          </p>
        </div>
      </div>
      
      {/* Decorative Footer Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-dark/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-accent-light/20 to-transparent blur-sm"></div>
    </footer>
  );
}