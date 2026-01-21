"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const Certificates = () => {
  const [certificatesData, setCertificatesData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCertificatesData(data?.certificatesData);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.png"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 right-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Certificates</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </div>

            <div className="flex flex-col gap-6 xl:gap-8">
              {certificatesData?.certificates?.map((certificate: any, index: any) => {
                return (
                  <div key={index} className="flex items-start gap-6">
                    <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h5>{certificate?.title}</h5>
                        {certificate?.icon && (
                          <Image
                            src={getImgPath(certificate?.icon)}
                            alt="certification icon"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <div className="font-normal">
                        <p className="text-justify">{certificate?.description}</p>
                        {certificate?.description2 && (
                          <p className="text-justify">{certificate?.description2}</p>
                        )}
                      </div>
                      {certificate?.certificateLink && (
                        <a
                          href={getImgPath(certificate?.certificateLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm mt-1"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
