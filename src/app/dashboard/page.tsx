import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Play, Zap, Flame, Star } from "lucide-react";
import { MOCK_COURSES, MOCK_USER_PROFILE } from "@/lib/mock";

export default function DashboardPage() {
  const profile = MOCK_USER_PROFILE;

  const activeCourses = profile.enrollments.map((en) => ({
    ...en,
    course: MOCK_COURSES.find((c) => c.id === en.courseId)!,
  }));

  // Recommended = courses not enrolled in
  const recommended = MOCK_COURSES.filter(
    (c) => !profile.enrollments.some((e) => e.courseId === c.id)
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* ── Hero banner ──────────────────────────────── */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 p-6 sm:p-8 shadow-xl shadow-blue-200 animate-fade-in">
        {/* dot texture overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
        <div className="absolute -right-8 -top-8 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-blue-200 text-sm font-medium mb-1">
              Good morning, {profile.name.split(" ")[0]}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Ready to keep growing?
            </h1>
            <p className="text-blue-200 text-sm mt-2">
              You&apos;re on a{" "}
              <span className="text-white font-semibold">
                {profile.streakDays}-day streak
              </span>
              . Keep it up!
            </p>
          </div>

          {activeCourses[0] && (
            <Link
              href={`/courses/${activeCourses[0].courseId}`}
              className="flex-shrink-0 bg-white text-blue-700 font-semibold text-sm px-5 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <Play size={16} fill="currentColor" /> Resume Course
            </Link>
          )}
        </div>
      </div>

      {/* ── Stat cards ───────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Overall Progress",
            value: `${profile.completionOverall}%`,
            icon: Star,
            bg: "bg-amber-50",
            iconColor: "text-amber-500",
            delay: "delay-50",
          },
          {
            label: "Active Courses",
            value: activeCourses.length,
            icon: BookOpen,
            bg: "bg-blue-50",
            iconColor: "text-blue-600",
            delay: "delay-100",
          },
          {
            label: "XP Points",
            value: profile.xpPoints.toLocaleString(),
            icon: Zap,
            bg: "bg-violet-50",
            iconColor: "text-violet-600",
            delay: "delay-150",
          },
          {
            label: "Day Streak",
            value: `${profile.streakDays} days`,
            icon: Flame,
            bg: "bg-rose-50",
            iconColor: "text-rose-500",
            delay: "delay-200",
          },
        ].map((card) => (
          <div
            key={card.label}
            className={`bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex items-start gap-4 animate-fade-in-up ${card.delay}`}
          >
            <div className={`p-2.5 rounded-lg ${card.bg} flex-shrink-0`}>
              <card.icon size={20} className={card.iconColor} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">{card.label}</p>
              <p className="text-2xl font-bold text-slate-900 mt-0.5">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Continue Learning ──────────────────────── */}
        <div className="lg:col-span-2 space-y-4 animate-fade-in-up delay-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Continue Learning</h2>
            <Link
              href="/courses"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              Browse all <ArrowRight size={15} />
            </Link>
          </div>

          {activeCourses.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              <div
                className={`sm:w-44 h-32 sm:h-auto bg-gradient-to-br ${item.course.color} flex items-center justify-center flex-shrink-0`}
              >
                <BookOpen size={36} className="text-white/70" />
              </div>

              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {item.course.domain}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base leading-snug mt-1 mb-1">
                    {item.course.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock size={12} /> {item.course.durationHours}h &bull;{" "}
                    {item.course.modulesCount} modules &bull; {item.course.instructor}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-medium text-slate-600 mb-1.5">
                      <span>{item.progressPct}% complete</span>
                      <span className="text-slate-400">
                        {item.course.modulesCount - Math.round((item.progressPct / 100) * item.course.modulesCount)} modules left
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="progress-gradient h-full rounded-full transition-all"
                        style={{ width: `${item.progressPct}%` }}
                      />
                    </div>
                  </div>
                  <Link
                    href={`/courses/${item.courseId}`}
                    className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm shadow-blue-200"
                  >
                    <Play size={14} fill="currentColor" /> Resume
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Right sidebar ──────────────────────────── */}
        <div className="space-y-5 animate-fade-in-up delay-300">
          {/* Learning path milestones */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Your Path</h3>
              <p className="text-xs text-slate-500 mt-0.5">{profile.learningPathName}</p>
            </div>
            <div className="p-5 relative">
              {/* vertical line */}
              <div className="absolute left-[29px] top-5 bottom-5 w-px bg-slate-200" />
              <ul className="space-y-5">
                {[
                  { label: "Complete Onboarding",       done: true  },
                  { label: "Finish AI Fundamentals",    done: false, current: true },
                  { label: "Start Leadership Course",   done: false },
                  { label: "Earn First Certificate",    done: false },
                ].map((m) => (
                  <li key={m.label} className="flex gap-3 items-start">
                    <div
                      className={`relative z-10 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border-2 mt-0.5
                        ${m.done
                          ? "bg-green-500 border-green-500"
                          : m.current
                          ? "bg-white border-blue-600"
                          : "bg-white border-slate-300"
                        }`}
                    >
                      {m.done && (
                        <svg viewBox="0 0 10 8" className="w-2.5 h-2.5 fill-white">
                          <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {m.current && !m.done && (
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-semibold leading-tight ${
                          m.done ? "line-through text-slate-400" : m.current ? "text-slate-900" : "text-slate-500"
                        }`}
                      >
                        {m.label}
                      </p>
                      {m.current && (
                        <p className="text-xs text-blue-600 mt-0.5 font-medium">In progress</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended next */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Recommended Next</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {recommended.slice(0, 2).map((c) => (
                <Link
                  key={c.id}
                  href={`/courses/${c.id}`}
                  className="flex gap-3 p-4 hover:bg-slate-50 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${c.color} flex-shrink-0 flex items-center justify-center`}
                  >
                    <BookOpen size={16} className="text-white/80" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {c.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {c.durationHours}h &bull; {c.difficulty}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
