import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2024-2025",
            title: "Monitoring and Evaluation Assistant",
            company: "Indus Hospital and Health Network (IHHN), Karachi, Pakistan",
            type: "Fulltime",
            description: "Supported planning and coordination of a community health project in partnership with RekoDiq Mining Company, providing free quality healthcare services to remote populations. Maintained regular liaison with internal teams, partner organizations, and field staff for data reporting and communication. Conducted and synthesized qualitative and quantitative data to assess health outcomes and service delivery improvements. Contributed to the development of project reports, presentations, and briefing documents. Ensured timely data collection using digital tools (Kobo Toolbox, Survey CTO) and adherence to project timelines."
        },
        {
            year: "2023",
            title: "Research & Technical Intern",
            company: "People's Primary Healthcare Initiative (PPHI Sindh), Karachi, Pakistan",
            type: "Internship",
            description: "Assisted in field-level coordination and data collection for MNCH and family planning programs. Supported development of resource materials for awareness campaigns and training content. Evaluated implementation barriers in service delivery and provided actionable insights. Collaborated with program staff and local health workers to facilitate communication and feedback loops. Conducted nutritional counselling of patients and assisted in development of dietary plans for chronic disease management."
        },
        {
            year: "2022",
            title: "Trainee Dietitian",
            company: "Liaquat National Hospital, Karachi, Pakistan",
            type: "Training",
            description: "Developed hands-on understanding of hospital nutrition protocols and patient-centred care."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;