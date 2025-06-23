"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolios } from "@/constants/portfolio";
import { CardContent } from "@/components/ui/card";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiVercelFill, RiBearSmileFill } from "react-icons/ri";

const tagIcon = {
  React: SiReact,
  Next: SiNextdotjs,
  TypeScript: SiTypescript,
  Zustand: RiBearSmileFill,
  Tailwind: SiTailwindcss,
  Vercel: RiVercelFill,
  "styled-components": SiStyledcomponents,
  "framer-motion": TbBrandFramerMotion,
};

const tagColor: Record<string, string> = {
  React: "text-[#61DAFB]",
  Next: "text-black dark:text-white",
  TypeScript: "text-[#3178C6]",
  Zustand: "text-amber-500",
  Tailwind: "text-[#38BDF8]",
  Vercel: "text-black dark:text-white",
  "styled-components": "text-pink-500",
  "framer-motion": "text-yellow-400",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-[87%] px-4 md:px-0 my-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pl-2 mb-6">
        Portfolio
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {portfolios.map((portfolio, idx) => (
          <a
            key={idx}
            href={portfolio.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card block overflow-hidden rounded-2xl bg-white dark:bg-zinc-900/70 dark:border-zinc-900/10 shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <div className="overflow-hidden h-52">
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                width={800}
                height={400}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/card:scale-[1.02]"
              />
            </div>
            <CardContent className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {portfolio.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {portfolio.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {portfolio.tags.map((tag, i) => {
                  const Icon = tagIcon[tag as keyof typeof tagIcon];
                  const colorClass = tagColor[tag] ?? "text-gray-400";

                  return (
                    <span
                      key={i}
                      className={`relative group/tag flex items-center justify-center w-8 h-8 rounded bg-white dark:bg-zinc-800 shadow text-xl ${colorClass}`}
                    >
                      <Icon />
                      {/* hover시 툴팁 노출 */}
                      <span className="absolute left-1/2 -translate-x-1/4 translate-y-1 mt-9 px-2 py-1 rounded bg-zinc-100 text-black dark:bg-black dark:text-white text-xs whitespace-nowrap opacity-0 group-hover/tag:opacity-100 transition-opacity z-10 pointer-events-none">
                        {tag}
                      </span>
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
