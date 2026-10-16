"use client";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Activity,
  X,
  Menu,
  Wallet,
  ChartNoAxesCombined,
  GraduationCap,
  UserRoundPlus,
  User,
  MessageCircleQuestionMark,
} from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!open);
  }
  return (
    <div
      className={
        open
          ? "w-60 md:flex absolute transition-all duration-300 overflow-hidden ease-in-out whitespace-nowrap  md:block border-r border-gray-300 p-0 md:p-2 w- md:w-60 bg-gray-50 h-screen flex-col center  "
          : "w-2 md:w-full md:px-5"
      }
    >
      <div className="mb-10 transition-all duration-300 relative md:flex mt-5 text-xl px-5 font-bold text-green-800">
        <Image
          src="/cryptrade-icon.svg"
          alt="logo"
          width={30}
          height={30}
          className="block md:hidden"
        />
        <Image
          src="/cryptrade-logo.svg"
          alt="logo"
          width={150}
          height={150}
          className="hidden md:block"
        />
        <X
          onClick={() => {
            setIsOpen(false);
          }}
          className={open?"mt-2 absolute -top-1  right-1  md:hidden":"hidden"}
        />
        <Menu
          onClick={() => {
            setIsOpen(true);
          }}
          className={open?"absolute md:hidden hidden top-2  -right-10":"md:hidden"}
        />
      </div>
      <div className="flex flex-col  justify-around *:py-3 *:px-5 *:rounded-lg *:hover:bg-gray-200 ">
        <Link href="../Dashboard" className=" flex gap-3 ">
          <LayoutDashboard />
          <h1 className="  md:flex">Dashboard</h1>
        </Link>
        <Link href="../Market" className="flex gap-3 md:flex">
          <Activity />
          <h1 className="  md:flex">Market</h1>
        </Link>
        <Link href="../Portfolio" className="flex gap-3 md:flex">
          <Wallet />
          <h1 className="  md:flex">Portfolio</h1>
        </Link>
        <Link href="../Gainers" className="flex gap-3 md:flex">
          <ChartNoAxesCombined />
          <h1 className="  md:flex">Gainers</h1>
        </Link>
        <Link href="../Gainers" className="flex gap-3 md:flex">
          <GraduationCap />
          <h1 className="  md:flex">Learn Trading</h1>
        </Link>
        <Link href="../Join" className="flex gap-3 md:flex">
          <UserRoundPlus />
          <h1 className="  md:flex">Join us</h1>
        </Link>
      </div>
      <div className="border-t flex border-gray-200 pt-3 mt-60 px-5">
        <User />
        <h1 className=" md:flex">Login/Signup</h1>
      </div>
      <div className="mt-2 flex px-5">
        <MessageCircleQuestionMark />
        <h1 className=" md:flex">Faq/Help</h1>
      </div>
    </div>
  );
}
