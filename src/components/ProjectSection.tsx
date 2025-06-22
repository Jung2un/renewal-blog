import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectSection() {
  return (
    <section id="project" className="w-[87%] my-20">
      <div className="px-4 md:px-0 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 pl-2 mb-6">Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-zinc-50 dark:bg-zinc-900/70 border-none shadow-md h-full transition-transform duration-300 hover:scale-101 cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <span className="text-lg">{project.title}</span>
                  <span className="md:mt-0 mt-2 text-sm">
                    {project.period}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold transition-color duration-200 mb-1">목표</p>
                  <p className="text-sm text-gray-900 dark:text-gray-300 transition-color duration-200">{project.goal}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-gray-300 font-semibold transition-color duration-200 mb-1">주요 작업</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 dark:text-gray-300 space-y-1">
                  {project.tasks.map((task, i) =>
                    task.trim() === "" ? (
                      <li key={i} className="list-none">&nbsp;</li>
                    ) : (
                      <li key={i} className="text-gray-900 dark:text-gray-300 transition-colors duration-200">
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
      </div>
    </section>
  );
}

const projects = [
  {
    title: "로그 채증 에이전트 개발",
    period: "📅 2025.01 ~ 2025.03",
    goal: "교육기관의 보안 진단 및 로그 분석을 위한 Windows 로그 수집 에이전트 개발",
    tasks: [
      "Windows 환경 전용 Python 기반 로그 수집 에이전트 100% 단독 개발",
      "Event Log, 시스템 로그 자동 수집 기능 개발 및 모듈 자동 import 기능 구현",
      "내부 테스트 환경 구성",
    ],
    skills: ["Python", "PowerShell"],
  },
  {
    title: "개인정보보호 자율점검 시스템",
    period: "📅 2024.11 ~ 2024.12",
    goal: "한국인터넷진흥원 개인정보보호 자율점검 서비스 구축",
    tasks: [
      "관리자 페이지: 자율점검표 관리, 점검 현황 API 연동 기능 구현",
      "사용자 페이지: 자율점검 수행, 제출 내역 확인 기능 구현",
      "기존 웹 화면을 모바일 환경 대응을 위해 반응형 UI로 전면 개선",
    ],
    skills: ["Java", "Cubrid", "JSTL"],
  },
  {
    title: "AI 개인정보 탐지 시스템 개발",
    period: "📅 2023.02 ~ 2024.12",
    goal: "개인정보를 포함한 문서 데이터에 대한 탐지 및 비식별화 처리 시스템 구축",
    tasks: [
      "개인정보 탐지·비식별 처리 포함 전체 서비스 UI 100% 단독 구현 및 API 연동",
      "기 관리, 통계 시각화, 대시보드 등 관리자 기능 포함 UI 고도화",
      "사용자 로그인 후 키 발급 및 editor에서 테스트 가능한 체험형 UI 구현",
    ],
    skills: ["React", "JavaScript"],
  },
  {
    title: "MoisMo: AI 기반 개인정보 탐지 시스템",
    period: "📅 2024.07 ~ 2024.08",
    goal: "문서 업로드/다운로드 기능 및 서브라벨링 UI 개발",
    tasks: [
      "멀티파일 업로드/다운로드 모달 및 API 연동 구현",
      "서브라벨링 기능 화면 개발 및 API 연동을 통한 라벨 관리 기능 구현",
      "",
    ],
    skills: ["React", "JavaScript"],
  },
];