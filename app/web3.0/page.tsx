import TemplateGrid from "@/components/main/TemplateGrid";
import { web3_templates } from "@/constants/templates";

export default function Web3Page() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <TemplateGrid templates={web3_templates} title="Web 3.0 Templates" />
      </div>
    </main>
  );
}