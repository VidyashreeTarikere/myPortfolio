import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    // Added an ID for navigation, section styling, and max width for readability
    <section
      id="about"
      className="mb-16 scroll-mt-16"
      data-highlightable="true"
    >
      <SectionHeading title="About" />

      <div className="space-y-4 text-[#1e293b] leading-relaxed text-lg">
        <p>
          I'm a Business Analyst Researcher based in Ghent, with a solid track
          record of turning complex technical chaos into clear requirements,
          optimized processes, and happy stakeholders. My work at KNoWs (UGent &
          IMEC) on knowledge graphs and semantic web taught me how to bridge the
          gap between developers, researchers, and business folks, without
          anyone losing their mind.
        </p>
        <br />
        <p>
          I specialize in requirements elicitation, process mapping (BPMN), and
          Agile delivery. I've run workshops, written user stories that actually
          make sense, and mapped workflows that keep teams aligned and moving
          forward. My superpower? Taking ambiguity and turning it into something
          actionable.
        </p>
        <br />
        <p>
          What sets me apart is my research background: I bring a data-driven,
          evidence-based mindset to every analysis, plus the empathy to actually
          listen to stakeholders. I believe great analysis starts with great
          questions, and I'm not afraid to ask them.
        </p>
        <br />
        <p>
          When I'm not working, you'll find me hunting down Ghent's best flat
          white, or adding yet another plant to my ever-growing collection. I'm
          also a passionate plant-based cook, always experimenting, always
          learning.
        </p>
        <br />
      </div>
    </section>
  );
};

export default About;
