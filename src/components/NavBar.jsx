"use client"
import React, { useState,useEffect } from "react";
import NavLinks from "./NavLinks";
import { afterLoginNavData,beforeLoginNavData } from "@/data/navData";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import auth from "@/firebase/firebase.config";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/user/userSlice";
// import Image from "next/image";
import toast from 'react-hot-toast';

const NavBar = () => {
const dispatch = useDispatch()
const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      // setLoading(false);
    });

    () => {
      unsubscribe();
    };
  }, []);

  const notify = () => toast('logout successfull.',{  duration: 4000,
    position: 'top-center',});
  const handleLogOut = ()=>{
    signOut(auth)
dispatch(logout());

  }
  // notify()

const {uid,displayName,photoURL} = user || {}
  const navData = uid ? afterLoginNavData : beforeLoginNavData;
  return (
    <nav className="flex justify-between items-center">


<div className="navbar bg-violet-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navData.map((nav) => (
              <li key={nav.path}>
                {" "}
                <NavLinks href={nav.path}> {nav.title} </NavLinks>{" "}
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navData.map((nav) => (
            <li key={nav.path}>
              {" "}
              <NavLinks href={nav.path}> {nav.title} </NavLinks>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex">
          <div className="dropdown dropdown-end">
         
           
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
               <img
             alt="user-logo"
             title={displayName}
             src={
               photoURL ||
               "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
             }
             width={40}
             height={40}
             className="h-10 w-10 rounded-full"
               />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
     
  
                <button onClick={handleLogOut}>Logout</button>
            
              </li>
            </ul>
          </div>
  
        </div>
      </div>  
    </div>


















    </nav>
  );
};

export default NavBar;
