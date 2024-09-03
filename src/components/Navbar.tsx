export default function Navbar() {
  return (
    <nav className="flex w-[60%] my-8 mx-auto  justify-around text-white">
      <p className="relative group">
        <a href="#" className="inline-block">
              Home
        <span className="block h-0.5 bg-violet-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
        </a>
      </p>
      <p className="relative group">
        <a href="#" className="inline-block">
              About
        <span className="block h-0.5 bg-violet-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
        </a>
      </p>
      <p className="relative group">
        <a href="#" className="inline-block">
              Speakers
        <span className="block h-0.5 bg-violet-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
        </a>
      </p>
      <p className="relative group">
        <a href="#" className="inline-block">
             Partners
        <span className="block h-0.5 bg-violet-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
        </a>
      </p>
      <p className="relative group">
        <a href="#" className="inline-block">
             FAQ
        <span className="block h-0.5 bg-violet-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
        </a>
      </p>
      {/* <p className="relative group">
        <a href="#" className="inline-block">
              HOME
        <span className="block h-0.5 bg-violet-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
        </a>
      </p>

      <p className="hover:underline hover:decoration-violet-500 hover:underline-offset-8 decoration-2  ">
        <a href="#about">ABOUT</a>
      </p>
      <p className="hover:underline hover:decoration-violet-500 hover:underline-offset-8 decoration-2  ">
        <a href="#speakers">SPEAKERS</a>
      </p>
      <p className="hover:underline hover:decoration-violet-500 hover:underline-offset-8 decoration-2  ">
        <a href="#partners">PARTNERS</a>
      </p>
      <p className="hover:underline hover:decoration-violet-500 hover:underline-offset-8 decoration-2  ">
        <a href="#faq">FAQ</a>
      </p> */}
    </nav>
  );
}
