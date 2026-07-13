// Projects.tsx
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

const Projects = () => {
  const projects = [
    {
      title: "SQL Query Showcase",
      description:
        "15+ queries demonstrating data extraction, joins, and aggregation on real-world datasets.",
      link: "https://github.com/your-profile/sql-showcase",
      tags: ["SQL", "PostgreSQL", "Data Analysis", "CTEs"],
      detailed: false, // No detailed explanation for this one
    },
    {
      title: "Task Manager App",
      description:
        "Full-stack task management application built to demonstrate CRUD operations and user authentication.",
      link: "https://your-task-manager-url.vercel.app/",
      tags: ["React", "TypeScript", "Local Storage", "CRUD"],
      detailed: false,
    },
    {
      title: "Movie Search App",
      description:
        "API-integrated movie search application with filtering and responsive design. Users can search for films, browse trending titles, view cast details, and save favourites to a local watchlist.",
      link: "https://movie-search-vidya-tarikere.vercel.app/",
      tags: ["React", "Vite", "TailwindCSS", "Supabase", "TMDB API", "Vercel"],
      detailed: true,
      details: {
        need: "Users want an intuitive way to discover movies, view details, and keep a personal watchlist.",
        approach:
          'I designed a user-friendly interface (UX) with a seamless authentication flow, emphasizing the "demo account" feature to remove friction and allow instant product exploration (a key product adoption tactic). I integrated with the TMDB API and used Supabase for scalable authentication.',
        outcome:
          "A fully responsive, functional web app that provides real user value and demonstrates the complete lifecycle from user story to deployment.",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16"
      data-highlightable="true"
    >
      <SectionHeading title="Projects" />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-[#0a0a0a]">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                {project.title}
              </a>
            </h3>
            <p className="mt-2 text-[#1e293b] leading-relaxed">
              {project.description}
            </p>
            <p className="mt-2 text-sm text-[#6b7280]">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                🔗 Link to the project →
              </a>
            </p>

            {/* Detailed Explanation (only for Movie Search App) */}
            {project.detailed && (
              <div className="mt-4 space-y-2 text-[#1e293b] leading-relaxed">
                <p>
                  <strong className="font-semibold">The Business Need:</strong>{" "}
                  {project.details?.need}
                </p>
                <p>
                  <strong className="font-semibold">My Approach:</strong>{" "}
                  {project.details?.approach}
                </p>
                <p>
                  <strong className="font-semibold">The Outcome:</strong>{" "}
                  {project.details?.outcome}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
