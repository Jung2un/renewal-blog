import CardSection from "./card";
import IntroSection from "./intro";

export default function MainSection() {
  return (
    <section id="main" className="w-[87%] flex items-start pb-10 flex-col md:flex-row justify-between md:h-screen">
      <div className="flex-1 w-full h-full content-center">
        <IntroSection />
      </div>
      <div className="w-full content-center px-2 md:px-0 md:self-start md:w-auto md:max-w-none md:h-full">
        <CardSection />
      </div>
    </section>
  );
}