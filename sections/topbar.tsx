import Image from "next/image";
import Link from "next/link";
import Logo from "../public/memoji.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  const scrollToView = (value: string) => {
    const contactSection = document.getElementById(value);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full shadow-2xl xl:relative xl:shadow-none dark:bg-main-color bg-light-main-color">
      <div className="flex justify-between p-4 px-8 pt-3 md:px-14 ">
        <div>
          <Link href="/" aria-label="Company" title="Company">
            <Image
              src={Logo}
              alt="Vasanth"
              height={45}
              width={45}
              className="cursor-pointer xl:hidden"
            />
          </Link>
          <Link href="/" aria-label="Company" title="Company">
            <Image
              src={Logo}
              alt="Vasanth"
              height={80}
              width={80}
              className="hidden xl:block"
            />
          </Link>
        </div>
        <div className={`xl:flex items-center hidden`}>
          <ThemeSwitcher />
        </div>
        <div className="flex items-center gap-3 xl:hidden">
          <div className={``}>
            <ThemeSwitcher />
          </div>
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className="w-5 text-light-text-color dark:text-text-color"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute left-0 w-full px-4 top-2">
              <div className="p-5 rounded dark:bg-main-color bg-light-main-color nav-shadow shadow-accent-color">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div
                      onClick={() => scrollToView("home")}
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <div className="rounded-full w-14 h-14">
                        <Image
                          src={Logo}
                          alt="Vasanth"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:bg-maven-white focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-maven-white" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li data-aos="fade">
                      <Link
                        target="_blank"
                        href="#"
                        className="p-2 text-xl font-medium tracking-wide transition-colors duration-200 border rounded text-accent-color border-accent-color hover:border-accent-color "
                      >
                        Blog
                      </Link>
                    </li>
                    <li data-aos="fade">
                      <div
                        onClick={() => scrollToView("home")}
                        className="font-medium tracking-wide transition-colors duration-200 "
                      >
                        Home
                      </div>
                    </li>
                    <li data-aos="fade">
                      <div
                        onClick={() => scrollToView("aboutme")}
                        className="font-medium tracking-wide transition-colors duration-200 "
                      >
                        About Me
                      </div>
                    </li>
                    <li data-aos="fade">
                      <div
                        onClick={() => scrollToView("timeline")}
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide transition-colors duration-200"
                      >
                        TimeLine
                      </div>
                    </li>
                    <li data-aos="fade">
                      <div
                        onClick={() => scrollToView("github")}
                        className="font-medium tracking-wide transition-colors duration-200"
                      >
                        Github
                      </div>
                    </li>
                    <li data-aos="fade">
                      <div
                        onClick={() => scrollToView("skills")}
                        className="font-medium tracking-wide transition-colors duration-200"
                      >
                        Skills
                      </div>
                    </li>
                    <li data-aos="fade">
                      <div
                        onClick={() => scrollToView("projects")}
                        className="font-medium tracking-wide transition-colors duration-200"
                      >
                        Projects
                      </div>
                    </li>
                    <li data-aos="fade">
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        href="/Vasanth_Resume.pdf"
                        target="_blank"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide transition-colors duration-200"
                      >
                        Resume
                      </Link>
                    </li>
                    <li data-aos="fade">
                      <div
                        onClick={() => scrollToView("contactme")}
                        className="font-medium tracking-wide transition-colors duration-200"
                      >
                        Contact Me
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
