import { TextField } from "@mui/material";
import checksvg from "../asset/images/icon-list.svg";
export function LeftForm() {
  return (
    <div className="flex flex-col py-14 justify-between">
      <h1 className="text-[3.5rem] font-bold"> Stay updated!</h1>

        <p >Join 60,000+ product managers receiving monthly updates on:</p>
      

      <div className="flex flex-col gap-3">
        <ListItem text="Product discovery and building what matters" />
        <ListItem text="Measuring to ensure updates are a success" />
        <ListItem text="And much more!" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between text-xs font-bold">
        <label htmlFor="input" className="">Email Adress</label>
        {/* <span className="text-primary ">wrong email</span> */}
        </div>
       <input className="w-full py-4 px-4 rounded-md border" placeholder="Enter your email address" />

      </div>
      <button className="text-white font-bold bg-neutral-dark py-4 rounded-md">Subscribe to monthly newsletter</button>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center gap-3">
      <img src={checksvg} alt="" />
      <p>{text}</p>
    </div>
  );
}
