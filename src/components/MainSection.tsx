import CardSection from "./CardSection";

export default function MainSection() {
  return (
    <section id="main" className="h-screen relative flex items-center justify-center mt-14">
      <div className="absolute top-4 right-4">
        <CardSection />
      </div>
      <div>
        자기소개
      </div>
    </section>
  );
}