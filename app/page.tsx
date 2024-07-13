import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from 'react-icons/fa'
import Image from "next/image";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data/index";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/ui/Footer";
import Recent from "@/components/Recent";

export default function Home() {
  return (
    <main className="relative bg-black-400 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Recent/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer />
      </div>
    </main>
  );
}
