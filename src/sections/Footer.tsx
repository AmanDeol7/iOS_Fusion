import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-[#1A1A1A] text-white px-32 py-4">
      <div className="flex justify-between items-center m-8">
        <div className="w-[10rem]">
            <Image src="/adglogo.png" alt="adg" width={500} height={500} />
        </div>
        <div className="w-[20%]">
          <p className="text-[#5F2EEA] font-bold">Quick Links</p>
          <div className="flex justify-between">
            <div>
              <p>
                <a href="">Events</a>
              </p>
              <p>
                <a href="">Projects</a>
              </p>
              <p>
                <a href="">Domains</a>
              </p>
              <p>
                <a href="">Partners</a>
              </p>
            </div>
            <div>
              <p>
                <a href="">Team</a>
              </p>
              <p>
                <a href="">Contact Us</a>
              </p>
              <p>
                <a href="">About Us</a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#5F2EEA] font-bold">Follow Us</p>
          <div className="flex justify-between gap-4 text-3xl my-2">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
          <div className="flex justify-between gap-4 text-3xl my-2">
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <p className="text-center m-8">
        Developed by ADG | &copy; 2024 All rights reserved.
      </p>
    </section>
  );
}
