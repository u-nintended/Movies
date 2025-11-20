import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
     
    <div className="align-center flex-col  p-70">
     <Header />
     <SideBar />
     <NavBar />
      <Button>Click me</Button>
  

      <div className="align-center flex-col"></div>
      <Button>Click me</Button>
      </div>
    
    
  );
}
