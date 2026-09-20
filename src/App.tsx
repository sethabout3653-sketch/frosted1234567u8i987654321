/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Copy, Check, Globe } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const targetHost = 'frosted-poop.duckdns.org';
  const targetUrl = 'http://frosted-poop.duckdns.org';
  const displayText = 'link to frosted : frosted-poop.duckdns.org';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(targetHost);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = targetHost;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="app-root"
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500 selection:text-white"
    >
      <motion.main
        id="frosted-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-lg bg-slate-900/90 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col items-center text-center"
      >
        <div
          id="frosted-icon-badge"
          className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center mb-6 text-sky-400 shadow-inner"
        >
          <Globe className="w-7 h-7 stroke-[1.75]" />
        </div>

        {/* Primary requested text */}
        <h1
          id="main-statement"
          className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100 leading-relaxed mb-4"
        >
          {displayText}
        </h1>

        <p className="text-sm text-slate-400 max-w-sm mb-8">
          Quick portal and link address for the frosted destination host.
        </p>

        {/* Action Controls */}
        <div className="w-full flex flex-col sm:flex-row gap-3 items-stretch justify-center">
          <a
            id="open-link-button"
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-medium text-sm transition-colors duration-150 shadow-md"
          >
            <span>Visit Host</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            id="copy-address-button"
            type="button"
            onClick={handleCopy}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 text-slate-200 font-medium text-sm transition-colors duration-150"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>
      </motion.main>
    </div>
  );
}
