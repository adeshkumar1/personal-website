"use client";
import Navigation from "./components/Navigation";
import FooterSocial from "./components/Footer/FooterSocial";
import Part from "./components/Particles";
import Code from "./components/Code";
import CodeEdit from "./components/CodeEditor";

import { useEffect, useState, useCallback } from "react";

export default function Home() {
   const [code, setCode] = useState<string>(
      `#include <iostream>\nint main() {\n  std::cout << "Hello, world!" << std::endl;\n  return 0;\n}`
   );

   const handleCodeChange = useCallback((newCode: string) => {
      setCode(newCode);
   }, []);

   useEffect(() => {
      console.log("page rendered");
   }, []);

   return (
      <div className="text-white select-none background-transparent">
         <Part />
         <div className="flex flex-col space-y-4 justify-center w-screen">
            <Navigation />
            <div className="flex justify-center items-center mt-40">
               <h1 className="text-2xl">
                  Hi 👋 My Name is Adesh Kumar, I&apos;m currently studying CS @
                  UIUC
               </h1>
            </div>

            <CodeEdit value={code} onChange={handleCodeChange} />

            <div>
               <h1 className="text-2xl text-center mt-4">
                  I&apos;m a software engineer who loves to build things
               </h1>
            </div>
         </div>
         <FooterSocial />
      </div>
   );
}
