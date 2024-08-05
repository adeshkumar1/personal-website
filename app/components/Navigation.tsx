import DarkModeToggle from "./DarkModeToggle";

const Navigation = () => {
   const handleClick = (ID: string) => {
      const text = document.getElementById(ID);
      console.log(text);
      text?.scrollIntoView({ behavior: "smooth", block: "center" });
   };
   return (
      <div
         className="lg:fixed md:fixed sm:absolute p-4 text-white w-[100vw] flex justify-between"
         id="Nav"
      >
         <div
            className="hover:cursor-pointer lg:ml-4 md:ml-4 flex justify-center items-center font-semibold dark:text-white text-black rounded-full p-[10px] border-2 dark:border-white border-black"
            onClick={(e) => handleClick("MainText")}
         >
            Adesh Kumar
         </div>
         <div className="scale-75 hover:cursor-pointer mt-2">
            <DarkModeToggle />
         </div>
      </div>
   );
};

export default Navigation;
