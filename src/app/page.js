import Image from "next/image";
import Siderbar from "./components/Siderbar";
import MainComponent from "./components/MainComponent";

export default function Home() {
  return (
    <main>
      <div className="flex bg-black w-full h-auto ">
      <Siderbar/>
      <MainComponent/>
      </div>
    </main>
  );
}
