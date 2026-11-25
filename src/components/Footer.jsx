import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold text-brand">AutoDeal</h3>
          <p className="mt-3 text-sm text-neutral-400">
            Buy and sell trusted used cars easily.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-bold text-brand">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white">
            <Link to="/" className="hover:text-brand">Home</Link>
            <Link to="/product" className="hover:text-brand">Cars</Link>
            <Link to="/about" className="hover:text-brand">About</Link>
            <Link to="/contact" className="hover:text-brand">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-brand">Contact</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white">
            <p>Islamabad, Pakistan</p>
            <p>+92 300 0000000</p>
            <p>info@autodeal.com</p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-line py-4 text-center text-sm text-neutral-400">
        © 2026 AutoDeal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer