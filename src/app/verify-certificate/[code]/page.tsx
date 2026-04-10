// app/verify-certificate/[code]/page.tsx
export default async function VerifyCertificatePage({ params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code;
  
  return (
    <div className="flex bg-slate-50 items-center justify-center min-h-screen p-4">
      <div className="max-w-2xl w-full p-8 md:p-12 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Certificate Verified</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">This certificate guarantees completion of coursework on the Elite Coach AI platform.</p>
        
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Certificate Code</p>
              <p className="text-slate-900 font-mono mt-1 font-medium">{code}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Date of Issue</p>
              <p className="text-slate-900 mt-1 font-medium">May 15, 2024</p>
            </div>
          </div>
        </div>
        
        <button className="mt-8 px-6 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  );
}
