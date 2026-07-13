import Tag from "./Tag";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <div>
      <section
        id="education"
        className="mb-16 scroll-mt-16"
        data-highlightable="true"
      >
        <SectionHeading title="Education" />

        <div className="space-y-10">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                Master of Technology in Computer Networks{" "}
                <span className="text-[#c9774a]">•</span> The National Institute
                of Engineering, India
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                2015 - 2017
              </p>
            </div>
            <p className="mt-1 text-sm text-[#6b7280]">
              <a
                href="https://nie.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                🔗 The National Institute of Engineering →
              </a>
            </p>
            <p className="mt-3 text-[#1e293b] leading-relaxed">
              Focused on advanced networking, wireless ad-hoc networks, and
              cloud computing. Thesis on optimizing video traffic received the
              "Best Paper" award at ISCCDA-17.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag>Advanced Networking</Tag>
              <Tag>Wireless Ad-Hoc Networks</Tag>
              <Tag>Cloud Computing</Tag>
              <Tag>Research</Tag>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="text-xl font-semibold text-[#0a0a0a]">
                Bachelor of Engineering in Computer Networks{" "}
                <span className="text-[#c9774a]">•</span> The National Institute
                of Engineering, India
              </h3>
              <p className="text-sm text-[#6b7280] whitespace-nowrap">
                2011 - 2015
              </p>
            </div>
            <p className="mt-1 text-sm text-[#6b7280]">
              <a
                href="https://nie.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2a9d8f] transition-colors"
              >
                🔗 The National Institute of Engineering →
              </a>
            </p>
            <p className="mt-3 text-[#1e293b] leading-relaxed">
              Core coursework in algorithms, operating systems, data structures,
              and file structures. Thesis on secure data management in
              disruption-tolerant military networks.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Tag>Algorithms</Tag>
              <Tag>Operating Systems</Tag>
              <Tag>Data Structures</Tag>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    </div>
  );
};

export default Education;
