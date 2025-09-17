"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/constants/project";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectSection() {
  return (
    <section id="project" className="w-[87%] my-20">
      <div className="px-4 md:px-0 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pl-2 mb-6">
          Project
        </h2>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* 첫 번째 프로젝트 */}
          <Card className="bg-zinc-50 dark:bg-zinc-900/70 border-none shadow-md h-full transition-transform duration-300 hover:scale-101 cursor-pointer w-full">
            <CardHeader>
              <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="text-lg">{projects[0].title}</span>
                <span className="md:mt-0 mt-2 text-sm">{projects[0].period}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold transition-color duration-200 mb-1">
                  목표
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-300 transition-color duration-200">
                  {projects[0].goal}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold transition-color duration-200 mb-1">
                  주요 작업
                </p>
                <ul className="list-disc list-inside text-sm text-gray-300 dark:text-gray-300 space-y-1">
                  {projects[0].tasks.map((task, i) =>
                    task.trim() === "" ? (
                      <li key={i} className="list-none">
                        &nbsp;
                      </li>
                    ) : (
                      <li
                        key={i}
                        className="text-gray-900 dark:text-gray-300 transition-colors duration-200"
                      >
                        {task}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {projects[0].skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 duration-100"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              {projects[0].link && (
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 text-right">
                  <a
                    href={projects[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                  >
                    <span>서비스 소개 페이지</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 나머지 프로젝트 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((project, idx) => (
              <Card
                key={idx + 1}
                className="bg-zinc-50 dark:bg-zinc-900/70 border-none shadow-md h-full transition-transform duration-300 hover:scale-101 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <span className="text-lg">{project.title}</span>
                    <span className="md:mt-0 mt-2 text-sm">{project.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold transition-color duration-200 mb-1">
                      목표
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-300 transition-color duration-200">
                      {project.goal}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold transition-color duration-200 mb-1">
                      주요 작업
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-300 dark:text-gray-300 space-y-1">
                      {project.tasks.map((task, i) =>
                        task.trim() === "" ? (
                          <li key={i} className="list-none">
                            &nbsp;
                          </li>
                        ) : (
                          <li
                            key={i}
                            className="text-gray-900 dark:text-gray-300 transition-colors duration-200"
                          >
                            {task}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 duration-100"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}