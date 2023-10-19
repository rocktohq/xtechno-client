import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-5">
      <div className="lg:flex justify-between max-w-screen-2xl px-3 mx-auto">
        <nav className="hidden lg:flex flex-col">
          <header className="footer-title">Services</header>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav className="hidden lg:flex flex-col">
          <header className="footer-title">Company</header>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Career</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav className="hidden lg:flex flex-col">
          <header className="footer-title">Legal</header>
          <Link className="link link-hover">Terms of Use</Link>
          <Link className="link link-hover">Privacy Policy</Link>
          <Link className="link link-hover">Cookie Policy</Link>
        </nav>
        <nav className="lg:flex items-center">
          <p className="text-center font-medium">Copyright &copy; <span className="text-secondary">x</span>Techo&trade; 2023</p>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
