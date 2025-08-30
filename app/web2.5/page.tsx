import { web2_5_templates } from "@/constants/templates";
import ServiceCTA from "@/components/main/ServiceCTA";
import TemplateGrid from "@/components/main/TemplateGrid";
import React from 'react';

const Web25Page = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider font-mono">
          Web 2.5 Development
        </h1>
        <p className="text-lg text-cyber-primary-dark mt-6">
          We build powerful, data-driven web applications with user authentication, payment systems, and robust backends. We bridge the gap between static websites and the decentralized future.
        </p>
      </div>

      <TemplateGrid 
        templates={web2_5_templates} 
        title="Our Web 2.5 Showcase" 
      />

      <ServiceCTA />
    </div>
  );
};

export default Web25Page;