import Card from "./card";
import useIntersectionObserver from "./useIntersectionObserver";
export default function Projects() {
  const [isIntersecting, gridRef] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={gridRef} id="projects" className="mt-40 w-full ">
      <div
        className="flex md:flex-row lg:flex-row sm:flex-col justify-center space-x-8"
        style={{
          gap: "20px", // Adds spacing between children
          opacity: 0,
          transform: "translateY(20px)",
          animation: isIntersecting ? "fadeIn 1s ease-in-out forwards" : "none",
        }}
      >
        <Card project="skinmatch" />
        <Card project="NCHS Bus App" />
        <Card project="Physics" />
      </div>
    </div>
  );
}
