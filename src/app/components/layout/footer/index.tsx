import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://www.linkedin.com/in/eiman-kalsoom-618322204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src={getImgPath("/images/icon/linkedin-img.png")}
                alt="LinkedIn"
                width={32}
                height={32}
              />
              <span className="text-secondary hover:text-primary">LinkedIn</span>
            </Link>
            <Link
              href="https://orcid.org/0009-0005-7093-7661"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src={getImgPath("/images/icon/ORCID-img.png")}
                alt="ORCID"
                width={40}
                height={40}
              />
              <span className="text-secondary hover:text-primary">ORCID</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
