import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
   return (
      <div
         className="mx-4 p-4 fixed text-white top-0 w-[100%] flex justify-between border-b-[1px]"
         id="Nav"
      >
         <div className="hover:cursor-pointer ml-4 flex justify-center items-center font-semibold">Adesh Kumar</div>
         {/* <div className="hover:cursor-pointer font-bold">Projects</div>
         <div className="hover:cursor-pointer font-bold">Technologies</div>
         <div className="hover:cursor-pointer mr-4 font-bold">Skills</div> */}
         <div className="scale-75 hover:scale-90">
            <DarkModeToggle />
         </div>
      </div>
   );
};

export default Navigation;
