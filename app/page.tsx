

import Navigation from "./components/Navigation";

export default function Home() {
  return(
    <div className="Background overflow-hidden">
      <Navigation />
      <div className="flex justify-center items-center mt-40">
        <h1 className="text-2xl">Hi 👋 My Name is Adesh Kumar, I&apos;m currently studying CS @ UIUC</h1>
      </div>
    </div>
  );
}
