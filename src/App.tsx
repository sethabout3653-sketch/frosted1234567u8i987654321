import React, { useEffect } from 'react';
import { ExternalLink, RefreshCw, Sparkles } from 'lucide-react';

const TARGET_URL = 'http://frosted-poop.duckdns.org';

export default function App() {
  useEffect(() => {
    // Attempt automatic redirection on load
    try {
      window.location.replace(TARGET_URL);
    } catch {
      window.location.href = TARGET_URL;
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-8 rounded-3xl shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 flex items-center justify-center">
          <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
            <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Redirecting to Frosted...</h1>
          <p className="text-sm text-slate-400 mt-2 font-mono break-all">
            http://frosted-poop.duckdns.org
          </p>
        </div>

        <div className="pt-2">
          <a
            href={TARGET_URL}
            className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>Click here if not redirected</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
