import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReadContratData } from "../components/ReadContratData";
import { DeployerWriteContract } from "../components/DeployerWriteContract";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <Header />
        <div className="w-full min-h-[70vh] p-4 flex justify-between space-x-3">
          <div className="border-2 flex-auto max-w-[30%] p-2">
            <ReadContratData />
          </div>
          <div className="border-2 flex-1 flex flex-col space-y-2 p-2">
            <div className="border-2 flex-1">
              <DeployerWriteContract />
            </div>
            <div className="border-2 flex-1">participant write functions</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
