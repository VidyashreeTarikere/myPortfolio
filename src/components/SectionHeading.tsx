interface SectionHeadingProps {
  title: string;
  id?: string;
}

const SectionHeading = ({ title, id }: SectionHeadingProps) => {
  return (
    <h2
      id={id}
      className="text-3xl font-bold text-[#0a0a0a] font-['Inter',sans-serif] mb-6 pb-3 border-b-4 border-[#2a9d8f] inline-block"
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
