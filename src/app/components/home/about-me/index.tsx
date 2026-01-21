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
                <h4 className="mb-4 text-black font-semibold">Executive Summary</h4>
                <p className="text-justify">
                  Public health Professional with an MSc in Public Health and hands-on experience leading monitoring, evaluation, and community-based health programmes across underserved settings. Experienced in managing field teams, coordinating multi-stakeholder projects, and delivering mixed-methods analysis to inform service improvement and evidence-based decision-making. Strong background in integrated primary healthcare, maternal and child health, and health inequalities, with demonstrated ability to implement data-driven evaluation processes, monitor performance, and translate complex data into actionable insights for programme optimization. Seeking a management-focused role in health service evaluation where academic rigor and operational impact intersect.
                </p>

                <div className="pt-8 xl:pt-10">
                  <h4 className="mb-6 text-black font-semibold">Core Competencies</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Health Service Evaluation",
                      "Programme & Project Coordination",
                      "Mixed-Methods Analysis",
                      "Community Health Systems",
                      "Data-Driven Decision-Making",
                      "Monitoring, Evaluation & Learning (MEL)",
                      "Workforce Training & Supervision",
                      "Stakeholder Engagement",
                      "Health Inequalities",
                      "Service Improvement",
                      "Ethical & GDPR-Compliant Data Management"
                    ].map((competency) => (
                      <span
                        key={competency}
                        className="inline-block py-2.5 px-4 rounded-md text-sm md:text-base font-medium text-black border-2 border-primary"
                        style={{ backgroundColor: 'rgba(226, 156, 187, 0.15)' }}
                      >
                        {competency}
                      </span>
                    ))}
                  </div>
                </div>

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
