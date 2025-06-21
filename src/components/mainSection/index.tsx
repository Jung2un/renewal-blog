import CardSection from "./card";
import IntroSection from "./intro";

export default function MainSection() {
  return (
    <section
      id="main"
      className="w-[87%] flex items-start py-8 mt-4 flex-col md:flex-row"
    >
  
      <div className="flex-1 max-w-3xl w-full h-[1100px] content-center">
        <IntroSection />
      </div>
      <div className="w-full max-w-full flex-shrink-0 md:self-start md:ml-auto md:w-auto md:max-w-none">
        <CardSection />
      </div>
    </section>
  );
}