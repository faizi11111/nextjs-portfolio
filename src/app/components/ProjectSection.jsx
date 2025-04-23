import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "SafeScope",
    description: "Security and Trespasser App",
    image: "/projects/facescope/facescope1.jpeg",
    tag: ["web", "mobile"],
  },
  {
    id: 2,
    title: "Rheumote",
    description: "Patients Survey App",
    image: "/projects/rheumote/rheumote1.jpeg",
    tag: ["web"],
  },
  {
    id: 3,
    title: "Foxtrax",
    description: "Ads Management and Insights App",
    image: "/projects/foxtrax/foxtrax1.jpeg",
    tag: ["web"],
  },
  {
    id: 4,
    title: "Find a VC",
    description: "As the name suggests, An app that helps you find a VC",
    image: "/projects/find-a-vc/find-a-vc1.jpeg",
    tag: ["web"],
  },
];

export const ProjectSection = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projectData.map((project) => {
          return (
            <ProjectCard
              description={project.description}
              title={project.title}
              key={project.id}
              imageUrl={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};
