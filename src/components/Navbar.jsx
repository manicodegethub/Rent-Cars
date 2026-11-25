import { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-sm font-medium uppercase text-brand'
      : 'text-sm font-medium uppercase text-white hover:text-brand'

  return (
    <header className="bg-ink border-b border-line">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="font-display text-2xl font-bold text-brand">
          AutoDeal
        </NavLink>

        <div className="hidden gap-8 md:flex">
          <NavLink to="/" end className={linkStyle}>Home</NavLink>
          <NavLink to="/product" className={linkStyle}>Buy-Cars</NavLink>
          <NavLink to="/sell" className={linkStyle}>Sell-Cars</NavLink>

          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </div>

        <button onClick={() => setOpen(true)} className="text-3xl text-white md:hidden">☰</button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="w-64 bg-ink p-6">
            <button onClick={() => setOpen(false)} className="text-3xl text-white">✕</button>

            <div className="mt-6 flex flex-col gap-6">
              <NavLink to="/" end onClick={() => setOpen(false)} className={linkStyle}>Home</NavLink>
              <NavLink to="/product" onClick={() => setOpen(false)} className={linkStyle}>Buy-Cars</NavLink>
              <NavLink to="/sell" onClick={() => setOpen(false)} className={linkStyle}>Sell-Cars</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className={linkStyle}>About</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={linkStyle}>Contact</NavLink>
            </div>
          </div>

          <div className="flex-1 bg-black/60" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </header>
  )
}

export default Navbar