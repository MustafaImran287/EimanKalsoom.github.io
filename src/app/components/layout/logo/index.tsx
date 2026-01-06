import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={getImgPath("/images/logo/logo-img.png")}
          alt="Eiman Kalsoom Logo"
          width={70}
          height={70}
          className="object-contain"
        />
      </Link>
    </>
  );
};

export default Logo;
