import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Facescope",
    description: "AI-powered security application using React, AWS Serverless, and GraphQL",
    image: "/projects/facescope/facescope1.jpeg",
    tag: ["web", "mobile"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    title: "Rheumote",
    description: "Healthcare quiz application using T3 stack",
    image: "/projects/rheumote/rheumote1.jpeg",
    tag: ["web"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "Foxtrax",
    description: "Marketing platform with GraphQL backend & React frontend, integrating Facebook Ads API",
    image: "/projects/foxtrax/foxtrax1.jpeg",
    tag: ["web"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    id: 4,
    title: "Find a VC",
    description: "An app that helps you find a VC",
    image: "/projects/find-a-vc/find-a-vc1.jpeg",
    tag: ["web"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    id: 5,
    title: "Upneeq",
    description: "Healthcare system redesign using Next.js and PHP",
    image: "/projects/find-a-vc/find-a-vc1.jpeg",
    tag: ["web"],
    codeLink: "#",
    demoLink: "#"
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectData.map((project) => {
          return (
            <ProjectCard
              description={project.description}
              title={project.title}
              key={project.id}
              imageUrl={project.image}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
            />
          );
        })}
      </div>
    </section>
  );
};
