import type { ReactNode } from "react";

interface HighlightWrapperProps {
  children: ReactNode;
}

const HighlightWrapper = ({ children }: HighlightWrapperProps) => {
  return <div className="highlight-container relative">{children}</div>;
};

export default HighlightWrapper;
