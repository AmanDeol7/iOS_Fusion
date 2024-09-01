export default function Navbar() {
  return (
    <nav className="flex w-[60%] my-8 mx-auto justify-around text-white">
      <p className="hover:text-blue-600 ">
        <a href="#">HOME</a>
      </p>
      <p className="hover:text-blue-600 ">
        <a href="#about">ABOUT</a>
      </p>
      <p className="hover:text-blue-600 ">
        <a href="#speakers">SPEAKERS</a>
      </p>
      <p className="hover:text-blue-600 ">
        <a href="#partners">PARTNERS</a>
      </p>
      <p className="hover:text-blue-600 ">
        <a href="#faq">FAQ</a>
      </p>
    </nav>
  );
}
