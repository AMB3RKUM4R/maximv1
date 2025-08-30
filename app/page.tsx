import Hero from "@/components/main/Hero";
import HowItWorks from "@/components/main/HowItWorks";
import Workshops from "@/components/main/Workshops";
import Skills from "@/components/main/Skills";
import Showcase from "@/components/main/Showcase";
import Mentor from "@/components/main/Mentor";
import Endorsement from "@/components/main/Endorsement";
import Experience from "@/components/main/Experience";
import Requirements from "@/components/main/Requirements";
import InfiniteShowcase from "@/components/main/InfiniteShowcase";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div id="hero"><Hero /></div>
      <div className="flex flex-col gap-20 py-20">
        <div id="how-it-works"><HowItWorks /></div>
        <div id="workshops"><Workshops /></div>
        <div id="skills"><Skills /></div>
        <div id="showcase"><Showcase /></div>
        <div id="mentor"><Mentor /></div>
        <div id="endorsement"><Endorsement /></div>
        <div id="experience"><Experience /></div>
        <div id="requirements"><Requirements /></div>
        <div id="infinite-showcase"><InfiniteShowcase /></div>
      </div>
    </div>
  );
}