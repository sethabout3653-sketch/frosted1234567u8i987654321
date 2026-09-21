/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ExternalLink, Globe } from 'lucide-react';

export default function App() {
  const targetUrl = 'http://frosted-poop.duckdns.org';
  const displayText = 'link to frosted';

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
          className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100 leading-relaxed mb-8"
        >
          {displayText}
        </h1>

        {/* Action Controls */}
        <div className="w-full flex justify-center">
          <a
            id="open-link-button"
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-medium text-sm transition-colors duration-150 shadow-md"
          >
            <span>Visit Host</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.main>
    </div>
  );
}
