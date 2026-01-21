import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Eiman Kalsoom</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.png")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h3>Public Health Researcher</h3>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl text-justify">
              Public Health and Nutrition Professional with experience supporting community-based projects in underserved settings. Skilled in data collection, analysis, and producing clear reports to inform decision-making and support impact reporting.
            </p>
          </div>
          <div className="block lg:hidden flex justify-center">
            <Image
              src={getImgPath("/images/home/banner/profile-img.png")}
              alt="profile-img"
              width={300}
              height={300}
              className="rounded-full object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] border-6 border-[#4b346a]"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-24 xl:right-32 2xl:right-40 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
        <Image
          src={getImgPath("/images/home/banner/profile-img.png")}
          alt="profile-img"
          width={400}
          height={400}
          className="rounded-full object-cover w-[300px] h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px] border-6 border-[#4b346a]"
        />
      </div>
    </section>
  );
};

export default index;
