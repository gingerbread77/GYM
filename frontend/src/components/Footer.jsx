import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-300 flex flex-col items-center gap-8 py-8 max-h-60">
      <div className="flex gap-8">
        <NavLink to="/club-rules" className="text-xl text-white">CLUB RULES</NavLink>
        <NavLink to="/privacy" className="text-xl text-white">PRIVACY POLICY</NavLink>
        <NavLink to="/terms-conditions" className="text-xl text-white">TERMS & CONDITIONS</NavLink>
      </div>
      <div className="flex text-xl gap-5">
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      </div>
      <div className="text-sm italic">
      <p>&copy; iFitness 2025 ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  )
}

export default Footer