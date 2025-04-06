import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/classes", label: "Classes" },
    { path: "/trainers", label: "Trainers" },
    { path: "/faq", label: "FAQ" },
  ];
  return (
    <nav className="flex bg-black justify-between items-center px-8 py-5 text-white">
      <NavLink to="/">
        <h1 className="text-2xl font-bold">iFitness</h1>
      </NavLink>
      <div className="flex gap-5 font-bold items-center">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-white" : ""
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <NavLink to="/register" className="font-bold">
        Register
      </NavLink>
    </nav>
  );
};

export default Navbar;
