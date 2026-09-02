import Overview from "./overview";
import Cryptolist from "./cryptolist";


export default async function Dashoboard() {
  


  return (
    <div className="bg-gray-50 p-1 px-10 pr-30 flex flex-1 flex-col h-full">
      <div className="flex  ">
        <div className=" px-5 pt-5  flex-1">
          <h1 className="text-xl font-bold">Welcome back, Jake</h1>
          <p className="text-sm">Today's insight of the crypto world</p>
        </div>
        <div className="px-5 pt-5">
          <input
            type="text"
            placeholder="Search"
            className="border w-60 outline-none text-sm border-gray-200 rounded-xl px-5 p-2"
            name=""
            id=""
          />
        </div>
      </div>
      <Overview />
      <Cryptolist />

      
    </div>
  );
}
