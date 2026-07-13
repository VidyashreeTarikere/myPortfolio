// components/Tag.tsx
interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <span className="inline-block text-xs font-medium bg-[#2a9d8f]/10 text-[#2a9d8f] px-3 py-1 rounded-full">
      {children}
    </span>
  );
};

export default Tag;
