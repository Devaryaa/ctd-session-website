"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BookOpen, Users, Award, Target, Globe, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Student Development",
    description:
      "Empowering Thapar students with industry-relevant training programs that bridge the gap between academics and professional life.",
    color: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-100 dark:border-purple-800/40",
  },
  {
    icon: BookOpen,
    title: "Structured Learning",
    description:
      "Curated workshops, seminars, and certification programs designed to enhance technical and soft skills for career readiness.",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800/40",
  },
  {
    icon: Briefcase,
    title: "Industry Connect",
    description:
      "Collaborating with leading organizations to provide students with real-world exposure, internships, and placement opportunities.",
    color: "text-green-500 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-100 dark:border-green-800/40",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Offering recognized certification programs that add value to student profiles and are acknowledged by industry recruiters.",
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-100 dark:border-orange-800/40",
  },
  {
    icon: Target,
    title: "Career Focused",
    description:
      "Goal-oriented training with dedicated counseling sessions, mock interviews, and resume-building support for students.",
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    border: "border-rose-100 dark:border-rose-800/40",
  },
  {
    icon: Globe,
    title: "Holistic Growth",
    description:
      "Fostering well-rounded development through programs spanning leadership, communication, and entrepreneurial thinking.",
    color: "text-teal-500 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-100 dark:border-teal-800/40",
  },
];

const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "200+", label: "Programs Conducted" },
  { value: "50+", label: "Industry Partners" },
  { value: "11+", label: "Years of Excellence" },
];

export default function AboutPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="w-full min-h-screen pb-0 relative bg-transparent">

      {/* ── HERO SECTION ── */}
      <div className="relative pt-16 pb-12 flex flex-col items-center justify-center text-center px-6">
        {/* Faded background word */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full flex justify-center">
          <span className="text-[14vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-800 opacity-[0.04] dark:from-neutral-200 dark:to-neutral-600 leading-none whitespace-nowrap">
            CTD
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500 dark:text-red-400 mb-4">
            Thapar Institute of Engineering & Technology
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-6">
            Centre for Training<br />& Development
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            The CTD at Thapar Institute is dedicated to developing the professional and personal capabilities of students
            through a rich portfolio of training programs, workshops, and industry interactions.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* ── STATS STRIP ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800/80 p-6 text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
            >
              <p className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">{stat.value}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── MISSION ── */}
        <div className="rounded-2xl bg-white dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800/80 p-8 md:p-12 mb-12 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              {mounted ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={resolvedTheme === "dark" ? "/logos/ctd-dark.svg" : "/logos/ctd-light.svg"}
                  alt="CTD Logo"
                  style={{ height: "40px", width: "auto", background: "transparent" }}
                />
              ) : (
                <div style={{ width: 160, height: 40 }} />
              )}
            </div>
            <div className="self-start">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">Our Mission</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px]">
                The Centre for Training & Development (CTD) at Thapar Institute of Engineering & Technology
                strives to be the premier destination for professional development within the institute.
                We are committed to equipping students with the skills, knowledge, and attitudes needed to
                thrive in a rapidly evolving global landscape — bridging the gap between classroom learning
                and industry expectations.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px] mt-4">
                Through strategic industry collaborations, expert-led training programs, and a focus on
                holistic growth, CTD empowers every student to realize their fullest potential.
              </p>
            </div>
          </div>
        </div>

        {/* ── HIGHLIGHTS GRID ── */}
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${item.bg} ${item.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white dark:bg-neutral-900 shadow-sm`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-[17px] font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
