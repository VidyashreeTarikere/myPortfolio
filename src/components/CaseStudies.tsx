// CaseStudies.tsx
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="mb-16 scroll-mt-16"
      data-highlightable="true"
    >
      <SectionHeading title="Case Studies" />

      {/* Case Study 1: Patient Data Interoperability Platform */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-[#0a0a0a]">
          Patient Data Interoperability Platform
        </h3>
        <p className="text-sm font-medium text-[#2a9d8f] mt-1">
          Healthcare IT • Interoperability
        </p>
        <p className="mt-1 text-sm text-[#6b7280]">
          <a
            href="https://absorbing-colony-8b8.notion.site/Patient-Data-Interoperability-Platform-Case-Study-348543c2fe48801d8600e2287462203d?pvs=74"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2a9d8f] transition-colors"
          >
            🔗 Learn More →
          </a>
        </p>

        <div className="mt-3 space-y-2 text-[#1e293b] leading-relaxed">
          <p>
            <strong className="font-semibold">Challenge:</strong> A hospital
            acquired three clinics running isolated legacy systems (Epic,
            Philips Tasy, and a custom platform), creating patient safety risks
            and manual registration processes.
          </p>
          <p>
            <strong className="font-semibold">Outcome:</strong> Defining
            requirements for a FHIR R4-based integration layer with Master
            Patient Index (MPI) for patient matching—specifying data mapping
            rules across three disparate systems, designing AI-driven allergy
            alerts with plain-language explainability for clinicians, and
            establishing a phased rollout strategy that prioritizes high-risk
            patient cohorts first.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Tag>BPMN</Tag>
          <Tag>FHIR R4</Tag>
          <Tag>Gap Analysis</Tag>
          <Tag>User Stories</Tag>
          <Tag>Requirements Elicitation</Tag>
          <Tag>Healthcare IT</Tag>
          <Tag>Data Integration</Tag>
          <Tag>AI Explainability</Tag>
        </div>
      </div>

      {/* Case Study 2: Logistics API - Predictive ETA Engine */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-[#0a0a0a]">
          Logistics API — Predictive ETA Engine →
          <span className="inline-block ml-3 text-xs font-medium bg-[#2a9d8f]/10 text-[#2a9d8f] px-3 py-1 rounded-full align-middle">
            Ongoing
          </span>
        </h3>
        <p className="text-sm font-medium text-[#2a9d8f] mt-1">
          Logistics • AI/ML • API Design
        </p>
        <p className="mt-1 text-sm text-[#6b7280]">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2a9d8f] transition-colors"
          >
            🔗 Learn More →
          </a>
        </p>

        <div className="mt-3 space-y-2 text-[#1e293b] leading-relaxed">
          <p>
            <strong className="font-semibold">Challenge:</strong> A logistics
            company needed to provide accurate, real-time delivery estimates to
            customers and partners via their API, but their legacy system relied
            on static routing tables that couldn't account for traffic, weather,
            or historical delivery patterns.
          </p>
          <p>
            <strong className="font-semibold">Outcome:</strong> Defining
            requirements for an AI-generated Predictive ETA Engine exposed via
            REST API—specifying model input parameters (traffic data, weather,
            historical delivery times, driver availability), setting confidence
            intervals for estimates, designing the API request/response schema,
            and defining fallback logic when real-time data is unavailable.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Tag>AI/ML</Tag>
          <Tag>API Design</Tag>
          <Tag>REST API</Tag>
          <Tag>Predictive Analytics</Tag>
          <Tag>Requirements Engineering</Tag>
          <Tag>Logistics</Tag>
          <Tag>Data Integration</Tag>
          <Tag>In Progress</Tag>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
