"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <motion.div
      className={`flex justify-between items-center w-full backdrop-blur-12 h-20 px-4 bg-green-600 text-white nav ${
        nav ? "nav-open" : ""
      }`}
      style={{ position: "fixed", zIndex: 100, top: 0, left: 0, right: 0 }}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-signature">
          <Link href="/" className="flex items-center font-bold">
            Nitin<span className="text-yellow-400 font-bold ">Maurya</span>
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex justify-center items-center space-x-5">
        <li className="nav-links cursor-pointer capitalize text-white font-bold hover:text-amber-500">
          <Link href="/">Home</Link>
        </li>

        <li className="nav-links cursor-pointer capitalize text-white font-bold hover:text-amber-500">
          <Link href="/learn">Learn</Link>
        </li>
        <li className="nav-links cursor-pointer capitalize text-white font-bold hover:text-amber-500">
          <Link href="/practice">Practice</Link>
        </li>
        <li className="nav-links cursor-pointer capitalize text-white font-bold hover:text-amber-500">
          <Link href="/about">About</Link>
        </li>
        <li className="nav-links cursor-pointer capitalize text-white font-bold hover:text-amber-500 ">
          <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Link href="tel:18778040909">Toll Free: 1877-804-0909</Link> 
            </span>
          </button>
        </li>
      </ul>

      <motion.div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </motion.div>

      {nav && (
        <motion.ul
          className="flex flex-col justify-center items-center absolute top-20 left-0 w-full min-h-[50vh] bg-green-600 font-bold text-gray-500 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <li className="cursor-pointer capitalize py-2 text-xl text-white hover:text-amber-500">
            <Link onClick={() => setNav(!nav)} href="/">
              Home
            </Link>
          </li>
          <li className="cursor-pointer capitalize py-2 text-xl text-white hover:text-amber-500">
            <Link onClick={() => setNav(!nav)} href="/learn">
              Learn
            </Link>
          </li>
          <li className="cursor-pointer capitalize py-2 text-xl text-white hover:text-amber-500">
            <Link onClick={() => setNav(!nav)} href="/practices">
              Practice
            </Link>
          </li>
          <li className="cursor-pointer capitalize py-2 text-xl text-white hover:text-amber-500">
            <Link onClick={() => setNav(!nav)} href="/about">
              About
            </Link>
          </li>
          <li className="cursor-pointer capitalize py-2 text-xl text-white hover:text-amber-500 border px-4 rounded-lg border-white">
            <Link onClick={() => setNav(!nav)} href="tel:18778040909">
              Toll Free: 1234-567-8900
            </Link>
          </li>
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Navbar;
