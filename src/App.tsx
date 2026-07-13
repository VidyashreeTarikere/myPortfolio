import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import HighlightWrapper from "./components/HighlightWrapper";
import Certificates from "./components/Certificates";

function App() {
  return (
    // Main container: flex layout on large screens, column on small
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column - Sticky Navigation */}
      <div className="lg:w-1/2 lg:min-h-screen lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between p-8 lg:p-12 bg-[#faf9f6]">
        <div className="max-w-md mx-auto w-full">
          <NavBar />
        </div>
      </div>

      {/* Right Column - Scrollable Content */}
      <div className="lg:w-1/2 p-8 lg:p-12 lg:overflow-y-auto bg-[#faf9f6]">
        <HighlightWrapper>
          <main className="max-w-2xl ">
            <About />
            <Experience />
            <Education />
            <Certificates />
            <CaseStudies />
            <Project />
            <Footer />
          </main>
        </HighlightWrapper>
      </div>
    </div>
  );
}

export default App;
