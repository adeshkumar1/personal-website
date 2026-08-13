import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    // id="nav" matches the z-index rule in globals.css, which previously
    // targeted `#nav` while this element was `id="Nav"`.
    <div
      className="lg:fixed md:fixed sm:absolute p-4 text-white w-[100vw] flex justify-between"
      id="nav"
    >
      <button
        type="button"
        className="hover:cursor-pointer lg:ml-4 md:ml-4 flex justify-center items-center font-semibold dark:text-white text-black rounded-full p-[10px] border-2 dark:border-white border-black"
        onClick={() => scrollTo("MainText")}
      >
        Adesh Kumar
      </button>
      <div className="scale-75 hover:cursor-pointer mt-2">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
