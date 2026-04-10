import { ModuleViewer } from "@/components/courses/ModuleViewer";

export default async function CourseModulePage({ params }: { params: Promise<{ id: string; moduleId: string }> }) {
  const { id, moduleId } = await params;
  
  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 bg-white py-3 px-5 rounded-xl border border-slate-100 shadow-sm w-fit">
        <a href="/courses" className="hover:text-green-600 transition-colors font-medium">Courses</a>
        <span>/</span>
        <a href={`/courses/${id}`} className="hover:text-green-600 transition-colors font-medium text-slate-700 truncate max-w-[200px]">Advanced Prompt Engineering</a>
        <span>/</span>
        <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md">Module {moduleId}</span>
      </div>

      <ModuleViewer courseId={id} moduleId={moduleId} />
    </div>
  );
}
