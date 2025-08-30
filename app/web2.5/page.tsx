// app/web2.5/page.tsx
import { web2_5_templates } from "@/constants/templates";
import ServiceCTA from "@/components/main/ServiceCTA";
import TemplateGrid from "@/components/main/TemplateGrid";
import React from 'react';
import Link from "next/link";
import { CyberCard } from "@/components/ui/CyberCard";
import { PenTool } from "lucide-react";

const TestSkillsCard = () => (
    <section className="py-20 px-4 md:px-10">
        <Link href="/exam">
            <CyberCard>
                <div className="text-center p-8">
                    <PenTool size={40} className="mx-auto text-cyber-primary mb-4"/>
                    <h2 className="text-3xl font-bold text-white">Ready to Test Your Skills?</h2>
                    <p className="text-gray-400 mt-2">Take our Web 2.5 mock test to see where you stand. Go to the Exam Hub now.</p>
                </div>
            </CyberCard>
        </Link>
    </section>
);

const Web25Page = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider font-mono">Web 2.5 Development</h1>
        <p className="text-lg text-cyber-primary-dark mt-6">We build powerful, data-driven web applications with user authentication, payment systems, and robust backends.</p>
      </div>
      <TemplateGrid templates={web2_5_templates} title="Our Web 2.5 Showcase" />
      <TestSkillsCard />
      <ServiceCTA />
    </div>
  );
};

export default Web25Page;