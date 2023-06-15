import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReadContratData } from "../components/ReadContratData";
import { DeployerWriteContract } from "../components/DeployerWriteContract";
import { ParticipantWriteContract } from "../components/ParticipantWriteContract";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <Header />
        <div className="w-full min-h-[70vh] p-4 flex justify-between space-x-3">
          <div className="flex-auto max-w-[30%] p-2">
            <ReadContratData />
          </div>
          <div className=" flex-1 flex flex-col space-y-16 p-2">
            <div className=" flex-1">
              <DeployerWriteContract />
            </div>
            <div className=" flex-1">
              <ParticipantWriteContract />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
