'use client';
import { useState } from 'react';

export default function BFHubTerminal() {
  const [targetUrl, setTargetUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState('');
  const [auditComplete, setAuditComplete] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '⚡ Core Engine initialized. I am the B&F Optimization Assistant. Specify the exact system latency or structural bottleneck you are trying to solve.' }
  ]);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl) return;
    setIsScanning(true);
    setAuditComplete(false);
    
    const steps = [
      'Initializing secure handshake...',
      'Analyzing SSL configuration & core web vitals...',
      'Evaluating DOM element structural lag...',
      'Compiling optimization roadmap...'
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step);
        if (index === steps.length - 1) {
          setTimeout(() => {
            setIsScanning(false);
            setAuditComplete(true);
          }, 1000);
        }
      }, (index + 1) * 1200);
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: chatInput }]);
    const currentInput = chatInput.toLowerCase();
    setChatInput('');

    setTimeout(() => {
      let botResponse = "System processed. To generate the specific asset modification roadmap for this stack, please provide your primary direct engineering email below.";
      if (currentInput.includes('@') || currentInput.match(/[0-9]{5,}/)) {
        botResponse = "Contact vector verified. Routing this log to our specialized automation architecture queue. Standby for direct secure confirmation.";
      }
      setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
    }, 800);
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      <div className="w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600"></div>
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            BF_INTELLIGENCE // HUBNODE_STABLE
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Automated Infrastructure Diagnostic Architecture.
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-light">
            Deploy hyper-velocity AI growth engines and plug front-end revenue leaks automatically.
          </p>
        </section>

        <section className="bg-slate-950 border border-slate-900 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <h2 className="text-xl font-bold font-mono mb-2">:: RUN_DIAGNOSTIC_ANALYSIS</h2>
          <p className="text-slate-500 text-sm mb-6">Input any operational domain to check for core latency anomalies and budget leakage.</p>

          {!auditComplete ? (
            <form onSubmit={handleRunAudit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 bg-black/40 p-2 rounded-xl border border-slate-800/80">
                <input 
                  type="text"
                  placeholder="enter target domain (e.g., business.com)"
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  disabled={isScanning}
                  className="flex-1 bg-transparent px-4 py-3 text-white placeholder-slate-600 font-mono text-sm focus:outline-none"
                />
                <button 
                  type="submit"
                  disabled={isScanning || !targetUrl}
                  className="bg-white text-black font-semibold font-mono text-xs px-6 py-3 rounded-lg hover:bg-slate-200 transition-all disabled:opacity-50"
                >
                  {isScanning ? 'EXECUTING...' : 'INITIALIZE SCAN'}
                </button>
              </div>

              {isScanning && (
                <div className="bg-black/60 p-4 rounded-lg border border-slate-900 font-mono text-xs text-emerald-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <span>{scanProgress}</span>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="bg-black/60 border border-red-500/30 rounded-xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-900">
                <div>
                  <h3 className="font-mono text-sm text-slate-400">DIAGNOSTIC DATA FOR:</h3>
                  <p className="font-mono font-bold text-lg text-white">{targetUrl}</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-lg text-center min-w-[100px]">
                  <div className="text-2xl font-black text-red-500 font-mono">64</div>
                  <div className="text-[10px] text-red-400 font-mono uppercase tracking-wider">CRITICAL ALERT</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-900">
                  <span className="text-slate-500">⚡ MOBILE LATENCY:</span>
                  <p className="text-red-400 mt-1 font-bold">5.4 Seconds (Critical Threshold)</p>
                </div>
                <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-900">
                  <span className="text-slate-500">📉 ESTIMATED TRAFFIC DROP:</span>
                  <p className="text-red-400 mt-1 font-bold">~42% High-Intent Bounce Abandonment</p>
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl space-y-3">
                <p className="text-xs text-slate-400">Enter validation criteria below to lock in the automated optimization configuration script.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="bg-black/80 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-white focus:outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Direct Business Email" 
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="bg-black/80 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-white focus:outline-none"
                  />
                </div>
                <button 
                  onClick={() => {
                    setIsSubmitting(true);
                    setTimeout(() => setIsSubmitting(false), 1500);
                  }}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-mono font-bold text-xs py-2.5 rounded-lg transition-all"
                >
                  {isSubmitting ? 'ROUTING DATA...' : 'SEND FULL DEPLOYMENT ROADMAP'}
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="max-w-2xl mx-auto space-y-4">
          <div className="text-center">
            <h2 className="text-lg font-bold font-mono">:: LIVE_ARCHITECTURE_INTAKE_BOT</h2>
            <p className="text-slate-500 text-xs">Engage the active terminal node directly instead of typical form submissions.</p>
          </div>

          <div className="border border-slate-800 bg-black rounded-xl font-mono text-[11px] overflow-hidden shadow-2xl">
            <div className="bg-slate-950 px-4 py-2 border-b border-slate-900 flex items-center justify-between">
              <span className="text-slate-500 select-none">bf_intake_agent.sh</span>
            </div>
            
            <div className="p-6 space-y-4 max-h-[250px] overflow-y-auto text-left bg-black/90">
              {messages.map((m, idx) => (
                <div key={idx} className={m.role === 'user' ? 'text-emerald-400' : 'text-slate-300'}>
                  <span className="text-slate-600 select-none">{m.role === 'user' ? '► USER:' : '▲ B&F_BOT:'}</span> {m.content}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="border-t border-slate-900 p-3 bg-slate-950 flex items-center">
              <span className="text-emerald-500 font-bold px-2 select-none">❯</span>
              <input 
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about latency patches or submit structural details..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none p-1 placeholder-slate-700"
              />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
