import { web3_templates } from "@/constants/templates";
import ServiceCTA from "@/components/main/ServiceCTA";
import TemplateGrid from "@/components/main/TemplateGrid";
import React from 'react';

const Web3Page = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider font-mono">
          Web 3.0 & Game Development
        </h1>
        <p className="text-lg text-cyber-primary-dark mt-6">
          From immersive games built with Unity to decentralized applications (dApps) on the blockchain, we are at the forefront of the next generation of the internet.
        </p>
      </div>

      <TemplateGrid 
        templates={web3_templates} 
        title="Our Web 3.0 & Gaming Showcase"
      />

      <ServiceCTA />
    </div>
  );
};

export default Web3Page;