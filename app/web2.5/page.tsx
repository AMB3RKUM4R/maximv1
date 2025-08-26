import TemplateGrid from "@/components/main/TemplateGrid";
import { web2_5_templates } from "@/constants/templates";

export default function Web2Point5Page() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <TemplateGrid templates={web2_5_templates} title="Web 2.5 Templates" />
      </div>
    </main>
  );
}