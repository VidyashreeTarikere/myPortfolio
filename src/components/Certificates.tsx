// components/Certificates.tsx
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

const Certificates = () => {
  const certificates = [
    {
      title: "IBM Business Analyst Professional Certificate",
      issuer: "IBM (Coursera)",
      status: "Ongoing",
      link: "https://www.coursera.org/professional-certificates/ibm-business-analyst-professional-certificate",
      description:
        "Comprehensive program covering requirements elicitation, process modeling (BPMN), stakeholder engagement, data analysis with Excel and Cognos, and agile project management. Aligned with BABOK and prepares for ECBA certification.",
      tags: [
        "Business Analysis",
        "BABOK",
        "Requirements Elicitation",
        "Process Modeling",
        "Data Analysis",
      ],
    },
    {
      title: "Entry Certificate in Business Analysis (ECBA)",
      issuer: "IIBA",
      status: "Planned",
      link: "https://www.iiba.org/business-analysis-certifications/ecba/",
      description:
        "Globally recognized foundational certification validating business analysis knowledge, skills, and behaviors. The first step for aspiring business analysis professionals.",
      tags: ["Business Analysis", "IIBA", "Foundational", "Global Recognition"],
    },
    {
      title: "Professional Scrum Product Owner I (PSPO I)",
      issuer: "Scrum.org",
      status: "Planned",
      link: "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification",
      description:
        "Validates knowledge of the Scrum framework and ability to bridge strategy and agile product management. Demonstrates understanding of product value creation, backlog management, and stakeholder collaboration.",
      tags: ["Scrum", "Product Owner", "Agile", "Product Management"],
    },
  ];

  return (
    <section
      id="certificates"
      className="mb-16 scroll-mt-16"
      data-highlightable="true"
    >
      <SectionHeading title="Certifications" />

      <div className="space-y-8">
        {certificates.map((cert, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2a9d8f] transition-colors"
                >
                  {cert.title} →
                </a>
                <span
                  className={`
                    inline-block ml-3 text-xs font-medium px-3 py-1 rounded-full align-middle
                    ${
                      cert.status === "Ongoing"
                        ? "bg-[#2a9d8f]/10 text-[#2a9d8f]"
                        : "bg-[#6b7280]/10 text-[#6b7280]"
                    }
                  `}
                >
                  {cert.status}
                </span>
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                {cert.issuer}
              </p>
            </div>

            <p className="mt-3 text-[#1e293b] leading-relaxed">
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {cert.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </section>
  );
};

export default Certificates;
