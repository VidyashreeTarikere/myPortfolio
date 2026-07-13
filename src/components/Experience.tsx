import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

const Experience = () => {
  return (
    <div>
      <section
        id="experience"
        className="mb-16 scroll-mt-16"
        data-highlightable="true"
      >
        <SectionHeading title="Experience" />

        <div className="space-y-10">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                Business Analyst Researcher{" "}
                <span className="text-[#c9774a]">•</span> UGent & IMEC
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                March 2022 - March 2025
              </p>
            </div>
            <p className="mt-1 text-sm text-[#6b7280]">
              <a
                href="https://knows.idlab.ugent.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                🔗 KNoWS Research Group →
              </a>
            </p>
            <p className="mt-3 text-[#1e293b] leading-relaxed">
              At UGent & IMEC, I owned the BA side of European research
              platforms, translating partner needs into user stories, mapping
              integrations, and designing scalable data architectures. I worked
              extensively with APIs to ensure interoperability across platforms,
              while keeping non-technical stakeholders in the loop with clear
              documentation and demos. I ran workshops, managed workstreams
              autonomously, and collaborated with researchers, developers, and
              legal teams to deliver solutions that actually worked for
              everyone. Yes, it was complex. That's exactly what made it fun.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag>Agile</Tag>
              <Tag>Stakeholder Management</Tag>
              <Tag>Jira</Tag>
              <Tag>API Integration</Tag>
              <Tag>Requirements Elicitation</Tag>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                FullStack Developer Intern{" "}
                <span className="text-[#c9774a]">•</span> BeCycled, Brussels
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                May 2021 - July 2021
              </p>
            </div>
            <p className="mt-1 text-sm text-[#6b7280]">
              <a
                href="https://www.becycled.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                🔗 BeCycled →
              </a>
            </p>
            <p className="mt-3 text-[#1e293b] leading-relaxed">
              At Becycled, I got my first real taste of Agile delivery. I
              gathered user feedback, turned insights into feature requirements,
              and worked side-by-side with developers through the full
              lifecycle.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag>Agile</Tag>
              <Tag>Scrum</Tag>
              <Tag>User Stories</Tag>
              <Tag>Requirements Gathering</Tag>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                Web Development <span className="text-[#c9774a]">•</span>{" "}
                BeCode, Ghent
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                October 2020 - April 2021
              </p>
            </div>
            <p className="mt-1 text-sm text-[#6b7280]">
              <a
                href="https://becode.org/en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                🔗 BeCode →
              </a>
            </p>
            <p className="mt-3 text-[#1e293b] leading-relaxed">
              I levelled up my dev game at BeCode, diving deep into JavaScript,
              React, PHP, and Laravel while building real projects that pushed
              my skills further. But the real highlight? I became the go-to
              person for my peers—debugging, explaining concepts, and helping
              everyone level up together. I landed here because I arrived in
              Belgium during COVID and refused to sit around waiting for the
              "perfect" role. Instead, I got my hands dirty, built stuff, and
              kept growing while the world figured itself out.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag>React</Tag>
              <Tag>JavaScript</Tag>
              <Tag>PHP</Tag>
              <Tag>Laravel</Tag>
              <Tag>Mentoring</Tag>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                Lecturer <span className="text-[#c9774a]">•</span> The National
                Institute Of Engineering, India
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                August 2018 - February 2020
              </p>
            </div>
            <p className="mt-1 text-sm text-[#6b7280]">
              <a
                href="https://nie.ac.in/academics/computer-science/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                🔗 The National Institute of Engineering →
              </a>
            </p>
            <p className="mt-3 text-[#1e293b] leading-relaxed">
              Delivered lectures translating complex technical concepts into
              clear learning objectives for 60+ students—directly mirroring the
              Business Analyst role of bridging business requirements and
              technical execution. Designed curricula, adapted content via
              continuous feedback (Agile-style iteration), and collaborated with
              faculty to align with industry standards. Honed stakeholder
              communication and documentation skills essential for translating
              business needs into functional specifications.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag>Stakeholder Management</Tag>
              <Tag>Communication</Tag>
              <Tag>Curriculum Design</Tag>
              <Tag>Documentation</Tag>
              <Tag>Public Speaking</Tag>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                Junior Analyst(Project Support){" "}
                <span className="text-[#c9774a]">•</span> VSR FutureTech
                Solutions, India
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                August 2017 - July 2018
              </p>
            </div>
            <p className="mt-3 text-[#1e293b] leading-relaxed">
              Supported the engineering team in analyzing system performance
              data for wireless sensor network projects. Contributed to
              documentation, data segregation, and process mapping to improve
              operational clarity. Gained early exposure to cross-functional
              collaboration and technical reporting.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag>Data Analysis</Tag>
              <Tag>Documentation</Tag>
              <Tag>Process Mapping</Tag>
              <Tag>Cross-functional Collaboration</Tag>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    </div>
  );
};

export default Experience;
