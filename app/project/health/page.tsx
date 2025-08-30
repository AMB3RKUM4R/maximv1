import { allTemplates } from "@/constants/templates";
import Image from "next/image";
import { Zap, Code, CheckCircle } from 'lucide-react';
import { CyberButton } from "@/components/ui/CyberButton";

export async function generateStaticParams() {
    return allTemplates.map((template) => ({
        slug: template.title.toLowerCase().replace(/\s+/g, '-'),
    }));
}

const ProjectDetailPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const project = allTemplates.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-white text-2xl">Project not found.</div>;
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-2">{project.title}</h1>
                    <p className="text-lg text-gray-400">{project.description}</p>
                    <div className="flex items-center justify-center mt-4 text-cyber-primary-dark font-mono text-md">
                        <Zap size={18} className="mr-2" />
                        Complexity Score: {project.tokenCost}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 relative w-full h-[500px] rounded-lg border-2 border-gray-800 overflow-hidden group">
                         <Image
                            src={project.src}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="transform group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x800/000000/FFD500?text=Project'; }}
                        />
                    </div>

                    <div className="bg-black/80 border-2 border-gray-800 p-8 rounded-lg flex flex-col">
                        <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                        <ul className="space-y-3 text-gray-300 mb-8">
                            <li className="flex items-start gap-3"><CheckCircle size={20} className="text-cyber-primary flex-shrink-0 mt-1"/><span>Feature-rich user interface and modern design.</span></li>
                             <li className="flex items-start gap-3"><CheckCircle size={20} className="text-cyber-primary flex-shrink-0 mt-1"/><span>Built with a scalable and maintainable architecture.</span></li>
                              <li className="flex items-start gap-3"><CheckCircle size={20} className="text-cyber-primary flex-shrink-0 mt-1"/><span>Integrates with backend services like Firebase for dynamic data.</span></li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mb-4">Technologies You&apos;ll Master</h2>
                        <div className="flex flex-wrap gap-2 text-sm text-cyber-cyan mb-8">
                            <span className="bg-cyber-cyan/10 px-3 py-1 rounded-full">Next.js</span>
                            <span className="bg-cyber-cyan/10 px-3 py-1 rounded-full">TypeScript</span>
                            <span className="bg-cyber-cyan/10 px-3 py-1 rounded-full">TailwindCSS</span>
                            <span className="bg-cyber-cyan/10 px-3 py-1 rounded-full">Firebase</span>
                        </div>
                        <CyberButton className="mt-auto w-full">
                           Enroll to Build This
                        </CyberButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;