import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
  const handleClick = (ID: string) => {
    const text = document.getElementById(ID);
    console.log(text);
    text?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div
      className=" fixed p-4 text-white w-[100vw] flex justify-between border-b-[2px] border-black dark:border-white"
      id="Nav"
    >
      <div
        className="hover:cursor-pointer ml-4 flex justify-center items-center font-semibold dark:text-white text-black"
        onClick={(e) => handleClick("MainText")}
      >
        Adesh Kumar
      </div>
      {/* <div */}
      {/*   className="hover:cursor-pointer ml-4 flex justify-center items-center font-semibold dark:text-white text-black" */}
      {/*   onClick={(e) => handleClick("skills")} */}
      {/* > */}
      {/*   Expierience */}
      {/* </div> */}
      <div
        className="hover:cursor-pointer ml-4 flex justify-center items-center font-semibold dark:text-white text-black"
        onClick={(e) => handleClick("skills")}
      >
        Skills
      </div>
      <div
        className="hover:cursor-pointer ml-4 flex justify-center items-center font-semibold dark:text-white text-black"
        onClick={(e) => handleClick("projects")}
      >
        Projects
      </div>
      <div className="scale-75 hover:cursor-pointer">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
