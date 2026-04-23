import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  ListOrdered,
  Wallet,
  Zap,
  MessageSquare,
} from "lucide-react";
import React from "react";

export type Role = "Learner" | "Admin" | "Tutor";

export const NAV_BY_ROLE: Record<
  Role,
  { section: string; links: { name: string; href: string; icon: React.ElementType }[] }[]
> = {
  Learner: [
    {
      section: "Academy",
      links: [
        { name: "My Dashboard", href: "/dashboard",  icon: LayoutDashboard },
        { name: "Catalog",      href: "/courses",    icon: BookOpen        },
        { name: "AI Tutor",     href: "/tutor",      icon: Zap             },
      ],
    },
  ],
  Admin: [
    {
      section: "Enterprise",
      links: [
        { name: "Overview",     href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Learner List", href: "/admin/users",     icon: Users           },
        { name: "Performance",  href: "/admin/reports",   icon: BarChart3       },
      ],
    },
  ],
  Tutor: [
    {
      section: "Operations",
      links: [
        { name: "Escalations",  href: "/tutor/queue",     icon: ListOrdered   },
        { name: "Wallet",       href: "/tutor/earnings",  icon: Wallet        },
        { name: "Discussions",  href: "/tutor/messages",  icon: MessageSquare },
      ],
    },
  ],
};
