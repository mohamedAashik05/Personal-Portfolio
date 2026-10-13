import React, { useState } from 'react';
import { 
  QrCode, 
  Sparkles, 
  Copy, 
  Check, 
  Search, 
  ShieldCheck, 
  Leaf, 
  Activity,
  Terminal,
  Database
} from 'lucide-react';

// 1. QR Attendance Preview
export const QrAttendancePreview: React.FC = () => {
  const [role, setRole] = useState<'trainer' | 'student'>('trainer');
  const [isScanning, setIsScanning] = useState(false);
  const [checkins, setCheckins] = useState([
    { id: 1, name: 'Aashik I (911522205001)', time: '09:02:14 AM', status: 'Verified', room: 'Lab 4' },
    { id: 2, name: 'Pravin K (911522205018)', time: '09:04:31 AM', status: 'Verified', room: 'Lab 4' },
    { id: 3, name: 'Karthik S (911522205022)', time: '09:05:10 AM', status: 'Verified', room: 'Lab 4' }
  ]);

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setCheckins(prev => [
        { id: Date.now(), name: 'Simulated Student (' + Math.floor(1000 + Math.random() * 9000) + ')', time: new Date().toLocaleTimeString(), status: 'Verified (Anti-Dupe)', room: 'Lab 4' },
        ...prev.slice(0, 3)
      ]);
    }, 800);
  };

  return (
    <div className="bg-[#0b0f19] rounded-xl border border-cyan-500/20 p-4 font-sans text-xs text-slate-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-slate-100 font-mono">MS-SQL SESSION: CSBS-SEM7</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button 
            onClick={() => setRole('trainer')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${role === 'trainer' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400'}`}
          >
            Trainer RBAC
          </button>
          <button 
            onClick={() => setRole('student')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${role === 'student' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400'}`}
          >
            Student View
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* QR Section */}
        <div className="bg-slate-950/60 rounded-lg p-3 border border-slate-800/60 flex flex-col items-center justify-center text-center">
          <div className="relative p-2.5 bg-slate-900 rounded-xl border border-cyan-500/30 mb-2 group">
            <QrCode className="w-20 h-20 text-cyan-400 transition-transform group-hover:scale-105" />
            {isScanning && (
              <div className="absolute inset-0 bg-cyan-400/10 border-b-2 border-cyan-400 animate-pulse rounded-xl" />
            )}
          </div>
          <span className="text-[10px] font-mono text-cyan-400/90 mb-1">JWT Nonce: #sec_9a4f2c01</span>
          <button 
            onClick={handleSimulateScan}
            disabled={isScanning}
            className="mt-1 px-3 py-1 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 rounded text-[11px] font-medium transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            {isScanning ? 'Validating Token...' : 'Simulate QR Check-In'}
          </button>
        </div>

        {/* Live Records */}
        <div className="bg-slate-950/60 rounded-lg p-2.5 border border-slate-800/60 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-semibold text-slate-300">Live Attendance Feed</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">38 Present</span>
            </div>
            <div className="space-y-1.5">
              {checkins.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-slate-900/70 px-2 py-1.5 rounded border border-slate-800/80 text-[10px]">
                  <span className="font-mono text-slate-200 truncate max-w-[130px]">{item.name}</span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span>{item.time}</span>
                    <span className="text-emerald-400 font-mono">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
            <span>SQL Relational Constraints: Active</span>
            <span className="text-cyan-400">T-SQL Stored Proc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. PromptCatalyst Preview
export const PromptCatalystPreview: React.FC = () => {
  const [model, setModel] = useState<'flash' | 'pro'>('flash');
  const [copied, setCopied] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const rawPrompt = "Write an API for employee leave management in ASP.NET Core with JWT";
  const enhancedPrompt = `Act as a senior .NET architect. Design a production-grade ASP.NET Core Web API for an Employee Leave Management System.
Specifications:
1. Architecture: Controller-Service-Repository pattern with Dependency Injection.
2. ORM: Entity Framework Core with Code-First Migrations and SQL Server.
3. Auth: JWT Bearer authentication with Role Claims (Admin, Manager, Employee).
4. Operations: Leave request submission, LINQ-based status filtering, and approval workflow.
5. Error Handling: Global exception middleware with standardized ProblemDetails.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(enhancedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 600);
  };

  return (
    <div className="bg-[#0b0f19] rounded-xl border border-cyan-500/20 p-4 font-sans text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-slate-100">PromptCatalyst Engine · Gemini Orchestrator</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
          <span className="text-slate-400">Target Model:</span>
          <button 
            onClick={() => setModel(model === 'flash' ? 'pro' : 'flash')}
            className="text-cyan-400 font-mono hover:underline"
          >
            {model === 'flash' ? 'Gemini 1.5 Flash' : 'Gemini 1.5 Pro'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        {/* Raw Input */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800/70">
          <div className="flex justify-between items-center mb-1.5 text-[11px] text-slate-400">
            <span>Raw User Input</span>
            <span className="font-mono text-[10px]">11 words</span>
          </div>
          <p className="text-slate-300 bg-slate-900/60 p-2 rounded border border-slate-800 text-[11px] leading-relaxed">
            "{rawPrompt}"
          </p>
          <button 
            onClick={handleSimulate}
            disabled={isOptimizing}
            className="mt-2.5 w-full py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/40 text-cyan-300 rounded font-medium text-[11px] transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {isOptimizing ? 'Analyzing Prompt Semantics...' : 'Optimize via Gemini API'}
          </button>
        </div>

        {/* Enhanced Output */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-cyan-500/30 relative">
          <div className="flex justify-between items-center mb-1.5 text-[11px]">
            <span className="text-cyan-300 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Optimized Structured Prompt
            </span>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-[10px] text-cyan-300 transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="text-[10px] text-slate-300 bg-slate-900/80 p-2 rounded border border-slate-800 font-mono leading-relaxed max-h-[110px] overflow-y-auto">
            {enhancedPrompt}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-2">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Deployed: Vercel (Client) + Render (API)
        </span>
        <span className="text-cyan-400 font-mono">Rate Limiting & Token Sanitizer Active</span>
      </div>
    </div>
  );
};

// 3. Employee Leave Management System Preview
export const LeaveManagementPreview: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'manager' | 'employee'>('manager');

  const leaveRequests = [
    { id: 'LV-401', employee: 'Mohamed Aashik', type: 'Annual Leave', days: '3 Days', date: 'Oct 20-22', status: 'Pending Review' },
    { id: 'LV-402', employee: 'Sarah Jenkins', type: 'Sick Leave', days: '1 Day', date: 'Oct 14', status: 'Approved' },
    { id: 'LV-403', employee: 'Rajesh Kumar', type: 'Casual Leave', days: '2 Days', date: 'Oct 18-19', status: 'Approved' },
  ];

  return (
    <div className="bg-[#0b0f19] rounded-xl border border-cyan-500/20 p-4 font-sans text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-slate-100 font-mono">ASP.NET CORE WEB API · EF CORE</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800 text-[10px]">
          <button 
            onClick={() => setSelectedRole('manager')}
            className={`px-2 py-0.5 rounded ${selectedRole === 'manager' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400'}`}
          >
            Manager Approval
          </button>
          <button 
            onClick={() => setSelectedRole('employee')}
            className={`px-2 py-0.5 rounded ${selectedRole === 'employee' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400'}`}
          >
            Employee Balance
          </button>
        </div>
      </div>

      <div className="space-y-2 mb-3">
        {leaveRequests.map((req) => (
          <div key={req.id} className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                {req.id}
              </span>
              <div>
                <div className="font-medium text-slate-200 text-[11px]">{req.employee}</div>
                <div className="text-[10px] text-slate-400">{req.type} · {req.days} ({req.date})</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${req.status === 'Approved' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`}>
                {req.status}
              </span>
              {req.status === 'Pending Review' && selectedRole === 'manager' && (
                <button className="px-2 py-0.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded text-[10px] border border-cyan-500/30 transition-colors">
                  Approve (PUT)
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 bg-slate-950/40 p-2 rounded border border-slate-800/60 text-[10px]">
        <div>
          <span className="text-slate-400 block">Endpoints:</span>
          <span className="text-cyan-400 font-mono">4 RESTful APIs</span>
        </div>
        <div>
          <span className="text-slate-400 block">ORM & Queries:</span>
          <span className="text-slate-200 font-mono">EF Core / LINQ</span>
        </div>
        <div>
          <span className="text-slate-400 block">Database:</span>
          <span className="text-emerald-400 font-mono">SQL Server 2022</span>
        </div>
      </div>
    </div>
  );
};

// 4. DocuMind RAG & MCP Preview
export const DocuMindPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rag' | 'mcp'>('rag');

  return (
    <div className="bg-[#0b0f19] rounded-xl border border-cyan-500/20 p-4 font-sans text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-slate-100 font-mono">DOCUMIND · RAG + MCP PROTOCOL</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800 text-[10px]">
          <button 
            onClick={() => setActiveTab('rag')}
            className={`px-2 py-0.5 rounded ${activeTab === 'rag' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400'}`}
          >
            RAG Passage Retrieval
          </button>
          <button 
            onClick={() => setActiveTab('mcp')}
            className={`px-2 py-0.5 rounded ${activeTab === 'mcp' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400'}`}
          >
            C# MCP Server Tools
          </button>
        </div>
      </div>

      {activeTab === 'rag' ? (
        <div className="space-y-2.5 mb-2">
          {/* Query input simulation */}
          <div className="bg-slate-950 p-2 rounded border border-slate-800 flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] text-slate-200 font-mono">Query: "Explain token expiration policy in auth microservice"</span>
          </div>

          {/* Retrieved chunk */}
          <div className="bg-slate-950/70 p-2.5 rounded border border-cyan-500/30">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-cyan-400 font-mono font-medium">Top Match: Cosine Similarity 0.892</span>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-1.5 py-0.5 rounded font-mono">
                Source: Architecture_Spec.pdf · Page 18
              </span>
            </div>
            <p className="text-[10px] text-slate-300 leading-relaxed bg-slate-900/60 p-1.5 rounded border border-slate-800/80">
              "...Access tokens are issued with a 15-minute expiration window utilizing HMAC-SHA256 signing. Refresh tokens are persisted in SQL Server with cryptographic hashing..."
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-slate-950 p-2.5 rounded border border-slate-800 font-mono text-[10px] space-y-1.5 mb-2">
          <div className="text-slate-400">// Model Context Protocol Tool Definition (C#)</div>
          <div className="text-cyan-300">[McpFunction("documind_search_passages")]</div>
          <div className="text-slate-200">
            public async Task&lt;PassageResult[]&gt; SearchPassages(string query, int topK = 3) &#123;
          </div>
          <div className="text-slate-400 pl-4">
            var embeddings = await _geminiEmbeddingClient.GenerateAsync(query);<br />
            return await _vectorStore.QueryTopKAsync(embeddings, topK);
          </div>
          <div className="text-slate-200">&#125;</div>
        </div>
      )}

      <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-2">
        <span className="text-cyan-400 font-mono">ASP.NET Core Web API + React Frontend</span>
        <span className="text-slate-300">Grounding Accuracy: Source Verified</span>
      </div>
    </div>
  );
};

// 5. RePlate Marketplace Preview
export const RePlatePreview: React.FC = () => {
  return (
    <div className="bg-[#0b0f19] rounded-xl border border-cyan-500/20 p-4 font-sans text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-slate-100">RePlate · Surplus Food Marketplace</span>
        </div>
        <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
          In Progress · MERN
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-3">
        <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
          <div className="flex justify-between items-start mb-1.5">
            <span className="text-[11px] font-semibold text-slate-200">Artisan Bakery Box</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1 rounded">₹149</span>
          </div>
          <p className="text-[10px] text-slate-400 mb-2">Croissants & sourdough pastries. Surplus from morning bake.</p>
          <div className="flex justify-between items-center text-[10px] border-t border-slate-800 pt-1.5 text-slate-300">
            <span>Pickup: 8:00 - 9:30 PM</span>
            <span className="font-mono text-cyan-400">3 left</span>
          </div>
        </div>

        <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
          <div className="flex justify-between items-start mb-1.5">
            <span className="text-[11px] font-semibold text-slate-200">Fresh Produce Bundle</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1 rounded">₹99</span>
          </div>
          <p className="text-[10px] text-slate-400 mb-2">Organic greens & seasonal fruits from local market partner.</p>
          <div className="flex justify-between items-center text-[10px] border-t border-slate-800 pt-1.5 text-slate-300">
            <span>Pickup: 7:00 - 8:30 PM</span>
            <span className="font-mono text-cyan-400">5 left</span>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded flex items-center justify-between text-[10px] text-emerald-300">
        <span>Impact Counter: ~142 Meals Saved from Landfill</span>
        <span className="font-mono text-slate-200">MongoDB + Mongoose</span>
      </div>
    </div>
  );
};

// 6. AgriSmart Preview
export const AgriSmartPreview: React.FC = () => {
  return (
    <div className="bg-[#0b0f19] rounded-xl border border-cyan-500/20 p-4 font-sans text-xs text-slate-300">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-slate-100">AgriSmart · Edge AI Telemetry</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
          IJEDR Publication (May 2026)
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3 text-center">
        <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
          <span className="text-[10px] text-slate-400 block">Soil Moisture</span>
          <span className="font-mono text-cyan-300 font-semibold text-sm">42%</span>
          <span className="text-[9px] text-emerald-400">Optimal</span>
        </div>
        <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
          <span className="text-[10px] text-slate-400 block">NDVI Index</span>
          <span className="font-mono text-emerald-400 font-semibold text-sm">0.74</span>
          <span className="text-[9px] text-slate-300">Healthy Canopy</span>
        </div>
        <div className="bg-slate-950/80 p-2 rounded border border-slate-800">
          <span className="text-[10px] text-slate-400 block">ONNX Inference</span>
          <span className="font-mono text-purple-300 font-semibold text-sm">18 ms</span>
          <span className="text-[9px] text-slate-300">Offline Edge</span>
        </div>
      </div>

      <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-[10px] flex items-center justify-between">
        <div>
          <span className="text-slate-400 block">XGBoost ML Advisory:</span>
          <span className="text-slate-200 font-medium">Recommended Crop: Groundnut (94.2% Confidence)</span>
        </div>
        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono text-[9px] border border-emerald-500/30">
          Kotlin & OpenCV
        </span>
      </div>
    </div>
  );
};
