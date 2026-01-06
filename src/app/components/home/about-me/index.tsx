import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[250px] h-[350px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-me-img.png")}
                  alt="about-me"
                  width={250}
                  height={350}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  Public Health and Nutrition Professional with experience supporting community-based projects in underserved settings. Background in Human Nutrition and Dietetics and Public Health, with hands-on experience collecting, managing and analyzing quantitative and qualitative data related to malnutrition, household food practices and service access. Skilled in producing clear reports to inform decision-making and support impact and donor reporting. Highly organized, confident with spreadsheets and digital tools, and motivated to tackle food insecurity and health inequalities through evidence-based, frontline work.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "05+", label: "Research Publications" },
                    { count: "03+", label: "Years Experience" },
                    { count: "05+", label: "Projects Completed" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Urdu", "Turkish"].map((lang) => (
                      <p
                        key={lang}
                        className="py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                        style={{ backgroundColor: 'rgba(226, 156, 187, 0.2)' }}
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
