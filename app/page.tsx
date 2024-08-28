import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from 'react-icons/fa'
import Image from "next/image";
import Grid from "@/components/Grid";
// import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data/index";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
import Footer from "@/components/ui/Footer";
import Recent from "@/components/Recent";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="relative dark:bg-neutral-950 bg-neutral-50 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div>
        
      </div>
      <div className="max-w-7xl w-full">
        <div className="fixed z-30 right-0 lg:top-0 bottom-0 lg:m-12 m-5 ">
        <div className='lg:w-14 w-10 lg:h-14 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 dark:bg-neutral-900 bg-neutral-300 rounded-lg border border-black-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <button>
            <ThemeToggle/>
          </button>
        </div>
        </div>
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Recent/>
        {/* <RecentProjects/> */}
        {/* <Clients/> */}
        <Experience/>
        {/* <Approach/> */}
        <Footer />
      </div>
    </main>
  );
}
