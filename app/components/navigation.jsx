import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex border-r border-gray-300 p-2 w-60 bg-gray-50 h-screen flex-col center  ">
      <div className="mb-10 mt-5 text-xl px-5 font-bold text-green-800">CrypTrade</div>
      <div className="flex flex-col justify-around *:py-3 *:px-5 *:rounded-lg *:hover:bg-gray-200 ">
          <Link href="../Dashboard" >Dashboard</Link>
           <Link href="../Market"  >Market</Link>
           <Link href="../Portfolio" >Portfolio</Link>
           <Link href="../Gainers" >Gainers</Link>
           <Link href="../Gainers" >Learn Trading</Link>
           <Link href="../Gainers" >Join us</Link>
      </div>
      <div className="border-t border-gray-200 pt-3 mt-60 px-5">Login/Signup</div>
      <div className="mt-2 px-5">Faq/Help</div>
    </div>
  );
}
