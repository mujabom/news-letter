import { LeftForm } from "./components/LeftForm";
import imgmain from "./asset/images/illustration-sign-up-desktop.svg";

export default function App() {
  return (
    <div className="min-h-screen grid place-items-center  bg-neutral-dark">
      <div className="bg-white max-w-[50rem] grid rounded-3xl md:grid-cols-2 p-6 gap-6 text-neutral place-content-center">
        <LeftForm></LeftForm>
        <div id="rightImage" className="p6">
          <img src={imgmain}   />
        </div>
      </div>
    </div>
  );
}
