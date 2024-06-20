import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
  return (
    <div
      className="p-4 text-white w-[100%] flex justify-between border-b-[2px] border-black dark:border-white"
      id="Nav"
    >
      <div className="hover:cursor-pointer ml-4 flex justify-center items-center font-semibold dark:text-white text-black">Adesh Kumar</div>
      {/* <div className="hover:cursor-pointer font-bold">Projects</div>
         <div className="hover:cursor-pointer font-bold">Technologies</div>
         <div className="hover:cursor-pointer mr-4 font-bold">Skills</div> */}
      <div className="scale-75 hover:cursor-pointer">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
