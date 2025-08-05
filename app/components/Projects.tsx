import Card from "./card";
import useIntersectionObserver from "./useIntersectionObserver";

const projects = ["skinmatch", "Bus App", "physics", "http-server"];

export default function Projects() {
  const [isIntersecting, gridRef] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={gridRef} id="projects" className="mt-40 w-full">
      <div className="flex justify-center space-x-[4vw] flex-wrap">
        {projects.map((project, idx) => (
          <div
            style={{
              gap: "20px", // Adds spacing between children
              opacity: 0,
              transform: "translateY(20px)",
              animation: isIntersecting
                ? `fadeIn 1s ease-in-out forwards ${idx * 0.75}s`
                : "none",
            }}
            key={idx}
          >
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
