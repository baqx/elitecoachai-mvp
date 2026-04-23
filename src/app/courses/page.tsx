import Link from "next/link";
import { BookOpen, Clock, Play, Star, Users } from "lucide-react";
import { MOCK_COURSES, MOCK_USER_PROFILE } from "@/lib/mock";

const DOMAINS = ["All", "Technology", "Data Analytics", "Leadership", "Finance"];

export default function CoursesPage() {
  const profile = MOCK_USER_PROFILE;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Course Catalog</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Expert-curated courses designed for Nigerian business professionals.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
        {DOMAINS.map((d, i) => (
          <button
            key={d}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border
              ${i === 0
                ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200"
                : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
              }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {MOCK_COURSES.map((course) => {
          const enrollment = profile.enrollments.find(
            (e) => e.courseId === course.id
          );

          return (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Thumbnail */}
              <div
                className={`h-36 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}
              >
                <BookOpen size={44} className="text-white/40" />
                {enrollment && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    In Progress
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {course.difficulty}
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                    {course.domain}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mt-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Instructor */}
                <p className="text-xs text-slate-600 font-medium">
                  {course.instructor}
                </p>

                {/* Rating & meta */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-slate-700">{course.rating}</span>
                    <span className="text-slate-400">({course.ratingCount.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-0.5">
                      <Clock size={11} /> {course.durationHours}h
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Users size={11} /> {course.modulesCount} mod
                    </span>
                  </div>
                </div>

                {/* Progress if enrolled */}
                {enrollment && (
                  <div>
                    <div className="flex justify-between text-xs mb-1 text-slate-600 font-medium">
                      <span>{enrollment.progressPct}% complete</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="progress-gradient h-full rounded-full"
                        style={{ width: `${enrollment.progressPct}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto pt-1 flex items-center justify-between">
                  <span className="text-base font-bold text-slate-900">
                    {course.price}
                  </span>
                  <Link
                    href={`/courses/${course.id}`}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors shadow-sm
                      ${enrollment
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                  >
                    {enrollment ? (
                      <><Play size={12} fill="currentColor" /> Resume</>
                    ) : (
                      <>Enroll Now</>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
