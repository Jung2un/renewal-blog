import Image from "next/image";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiGit,
  SiVelog,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiBearSmileFill } from "react-icons/ri";

const ProfileSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="flex-shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/122095401?v=4"
          alt="Profile photo"
          width={120}
          height={120}
          className="rounded-full border shadow dark:border-zinc-800"
        />
      </div>
      <div>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">이정은</h2>
          <a
            href="https://github.com/Jung2un"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-black dark:text-white hover:text-gray-600"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://velog.io/@jeun_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 dark:text-green-400 dark:hover:text-green-500 text-green-300 hover:text-green-400"
          >
            <SiVelog className="w-5 h-5" />
          </a>
        </div>
        <p className="text-blue-600 font-medium">Frontend Developer</p>
        <p className="text-gray-500 mt-1">
          React 중심의 웹 서비스 개발과 UI/UX 개선에 주력하는 개발자입니다.
          <br />
          다양한 프로젝트를 통해 Next.js와 TypeScript 주요 기술을 활용하고
          있습니다.
        </p>
      </div>
    </div>
  );
};

const CareerSection = () => {
  const experiences = [
    {
      year: "2023.04 - 2025.04",
      title: "프론트엔드 개발자",
      company: "🏢 티사이언티픽",
      description:
        "React 기반 AI 개인정보 탐지·비식별 시스템의 UI를 단독 개발하고, \n로그 수집 및 보안 진단 시스템 등 다양한 내부 서비스 개발에 참여하였습니다.",
    },
    {
      year: "2021.02 - 2023.04",
      title: "프론트엔드 개발자",
      company: "🏢 아이티노매즈",
      description:
        "기업 홈페이지 및 사내 ERP 시스템 개발과 퍼블리싱, 관리자 및 사용자 UI 개선 작업을 수행하였습니다.",
    },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-2">경력</h3>
      <div className="relative border-l border-gray-300 dark:border-gray-600 text-gray-700 leading-relaxed mt-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-1.5 border border-white dark:border-zinc-800" />
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {exp.year}
            </p>
            <h4 className="text-md font-semibold mt-1">{exp.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {exp.company}
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillSection = () => {
  const skills = [
    { name: "React", Icon: SiReact, color: "text-sky-400" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-blue-500" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-green-600" },
    { name: "Python", Icon: SiPython, color: "text-yellow-300" },
    { name: "Zustand", Icon: RiBearSmileFill, color: "text-orange-400" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Figma", Icon: SiFigma, color: "text-pink-500" },
    { name: "Git", Icon: SiGit, color: "text-red-500" },
  ];

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-2">기술</h3>
      <div className="flex flex-wrap gap-3 mt-4 cursor-pointer">
        {skills.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="group relative p-2 bg-slate-50 dark:bg-zinc-950 rounded-lg"
          >
            <Icon className={`w-8 h-8 ${color}`} />
            <span className="absolute left-1/3 ml-0 mt-3 w-max scale-0 group-hover:scale-100 transition-transform origin-left text-dark dark:text-white text-sm rounded-md px-2 py-1">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function IntroSection() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <ProfileSection />
      <CareerSection />
      <SkillSection />
    </div>
  );
}
