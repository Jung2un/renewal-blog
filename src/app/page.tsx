import MainSection from "@/components/mainSection/index";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import PortfolioSection from "@/components/PortfolioSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <div className="flex max-w-7xl mx-auto flex-col items-center">
        {/* 메인 & 자기소개 영역 */}
        <MainSection />

        {/* 포트폴리오 영역 */}
        <PortfolioSection />

        {/* 프로젝트 소개 영역 */}
        <ProjectSection />
      </div>

      <ContactSection />
      
      <ScrollToTopButton />
    </>
  );
}
