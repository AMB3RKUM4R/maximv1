import HeroSlider from "@/components/main/HeroSlider";
import HowItWorks from "@/components/main/HowItWorks";
import Workshops from "@/components/main/Workshops";
import Skills from "@/components/main/Skills";
import Showcase from "@/components/main/Showcase";
import Mentor from "@/components/main/Mentor";
import Endorsement from "@/components/main/Endorsement";
import Experience from "@/components/main/Experience";
import Requirements from "@/components/main/Requirements";
import InfiniteShowcase from "@/components/main/InfiniteShowcase";
import Testimonials from "@/components/main/Testimonials";
import FAQ from "@/components/main/FAQ";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div id="hero"><HeroSlider /></div>
      <div className="flex flex-col">
        <div id="how-it-works" className="pt-20"><HowItWorks /></div>
        <div id="workshops" className="pt-20"><Workshops /></div>
        <div id="skills" className="pt-20"><Skills /></div>
        <div id="showcase" className="pt-20"><Showcase /></div>
        <div id="mentor" className="pt-20"><Mentor /></div>
        <div id="endorsement" className="pt-20"><Endorsement /></div>
        <div id="testimonials" className="pt-20"><Testimonials /></div>
        <div id="experience" className="pt-20"><Experience /></div>
        <div id="requirements" className="pt-20"><Requirements /></div>
        <div id="faq" className="pt-20"><FAQ /></div>
        <div id="infinite-showcase" className="pt-20"><InfiniteShowcase /></div>
      </div>
    </div>
  );
}