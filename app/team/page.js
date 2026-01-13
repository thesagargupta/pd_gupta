
"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";

export default function TeamPage() {
  const [expanded, setExpanded] = useState([]);
  const aboutRefs = useRef([]);
  const teamMembers = [
    {
      name: "Deepak Gupta",
      role: "Co Founder",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQEowcRUznJ6Bw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1613014929535?e=1769644800&v=beta&t=oAzHQZBmhZI2z3MzeMBeMDWHLgFBN7ztOk14ZCIlJWI",
      bio: "CA Deepak Gupta,is Co-founder of Studycafe. He is Microsoft Office Specialist and Corporate Trainer of AI Tools, Microsoft Excel. He is Finance Influencer having more than 250K followers on Social Media. CA Deepak Gupta, is Having more than 14 plus years of experience, and he has Worked with best brands Like, Hero, Wipro, Ericsson before Starting Studycafe. He has Trained more than 20000 Persons in Microsoft Excel, PowerPoint, Power BI, Google Sheet, Google Forms and Other Tools.",
    },
    {
      name: "CA Pratibha Goyal",
      role: "Co Founder",
      image: "https://media.licdn.com/dms/image/v2/C5603AQEAjB5Fx-zVrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1601732626386?e=1769644800&v=beta&t=GHlaHIYEtfbYOY9vawnqeBNzbHQGtlKFyGYvaOM1RGA",
      bio: "CA Pratibha Goyal is Chartered Accountant qualified in 2016, is a Member of The Institute of Chartered Accountants of India having wide experience in the field of Auditing, Taxation, ROC, GST and Secretarial matters etc. She has written over a thousand articles & has made several videos on topics related to Auditing & Taxation. As a Speaker she has delivered various sessions on various branches of NIRC of ICAI.",
    },
    {
      name: "RAJA MEHTA",
      role: "Operation Manager",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGUCQjFLB2GbQ/profile-displayphoto-scale_400_400/B56ZeioKouH8Ag-/0/1750780130165?e=1769644800&v=beta&t=NfNCqCdntwemk-S0JCbKr5Munrd5ALn1VYZ3Q4eYTGk",
      bio: "Raja Mehta is an Accountant with 3+ years of experience in the field of GST, Income Tax, ROC Filing, Audit and Return Filing. Currently working as a Account Manager at Studycafe and managing another operational area.",
    },
    {
      name: "Simran Chawla",
      role: "Motion Graphic Designer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHOa7udfiKwMA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715164764509?e=1769644800&v=beta&t=ddBvUZk22vp2aM-ubk_h8W59juVi7HrHRuAbTKl3ek4",
      bio: "Simran is a talented Motion Graphic Designer at StudyCafe, where they bring creative visions to life through dynamic visuals and engaging animations. She creates compelling motion graphics that enhance the user experience and effectively communicate complex ideas. Their innovative approach ensures that StudyCafe's content stands out and captures the audience’s attention.",
    },
    // {
    //   name: "Meetu Kumari",
    //   role: "Content Manager",
    //   image: "",
    //   bio: "Meetu Kumari is an Experienced Advocate and Content Writer with 4+ years of demonstrated history of working in the law practice industry. Skilled in Developing Content, Researching, and Drafting. Strong professional with a Bachelor of Science (B.Sc.) focused on Law from Gujarat National Law University.",
    // },
    {
      name: "Janvi",
      role: "Digital Marketing Executive",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFqCYqQKEk75Q/profile-displayphoto-scale_400_400/B56Zfo5vyTG0Ak-/0/1751959143724?e=1769644800&v=beta&t=WXdNPGAA3AAGIhn8HBWGmIgriDQAcpf-5uozO1Af3OA",
      bio: "Janvi is an expert content writer focused on taxation and compliance. She writes insightful articles on income tax, GST, company law, and government policies. Known for her practical approach, she simplifies complex regulations to help readers stay informed and compliant. She can be reached at Janvi@studycafe.in",
      
    },
        {
      name: "Saloni Kumari",
      role: "Content Writer",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQF8H3PlNaz9xA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714718243797?e=1769644800&v=beta&t=5xeNGd1eYtuZGE3IcjnHVO78aiZhXqnaLaJlAAUp2R4",
      bio: "Janvi is an expert content writer focused on taxation and compliance. She writes insightful articles on income tax, GST, company law, and government policies. Known for her practical approach, she simplifies complex regulations to help readers stay informed and compliant. She can be reached at Janvi@studycafe.in",
      
    },
          {
      name: "Sagar Gupta",
      role: "Full-Stack Developer",
      image: "https://sagargupta.tech/assets/photo8-DvgXYAY6.webp",
      bio: "Sagar is a Web and Software Developer specializing in AI automation, n8n workflow orchestration, and MERN stack development, delivering efficient, scalable, and intelligent software systems.",
      
    },
              {
      name: "Deepak Sharma",
      role: "Full-Stack Developer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE099AERDO34A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722928600595?e=1769644800&v=beta&t=vEeRW7Jj5XV3tTHOdg_0DBdh0pyKH2oXG-YECM9Lzzg",
      bio: "Deepak is a passionate Web and Software Developer with expertise in the MERN stack, as well as software development across a variety of technologies",
      
    },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "We continuously explore new ideas and technologies to stay ahead of the curve.",
    },
    {
      title: "Collaboration",
      desc: "Teamwork and open communication drive our success and creativity.",
    },
    {
      title: "Integrity",
      desc: "We value honesty, transparency, and trust in everything we do.",
    },
    {
      title: "Customer Focus",
      desc: "Our clients are at the heart of every decision and project.",
    },
  ];


  // Helper to split bio into preview and rest
  function splitBio(bio) {
    // Split by ". " for sentences, or fallback to 2-3 lines
    const sentences = bio.split(/(?<=\.)\s+/);
    if (sentences.length <= 2) {
      return [bio, ""];
    }
    return [sentences.slice(0, 2).join(" "), sentences.slice(2).join(" ")];
  }

  const handleReadMore = (idx) => {
    setExpanded((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
    setTimeout(() => {
      if (aboutRefs.current[idx]) {
        aboutRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleReadLess = (idx) => {
    setExpanded((prev) => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20 text-center reveal">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our Dedicated Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re a passionate group of creators, developers, and strategists working together to build impactful digital experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            The people who make everything possible — combining creativity, technology, and vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const [preview, rest] = splitBio(member.bio);
              return (
                <div
                  key={index}
                  ref={el => aboutRefs.current[index] = el}
                  className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 ring-offset-4 ring-offset-white bg-white flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        style={{ aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
                        onError={e => { e.target.src = '/banner.jfif'; }}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">
                    {expanded[index] ? (
                      <>
                        {preview} {rest && rest.length > 0 && <>{rest}</>}
                        {rest && rest.length > 0 && (
                          <>
                            {' '}
                            <span
                              className="font-bold text-blue-700 cursor-pointer hover:underline ml-2"
                              onClick={() => handleReadLess(index)}
                            >
                              Read Less
                            </span>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {preview}
                        {rest && rest.length > 0 && (
                          <>
                            ...{' '}
                            <span
                              className="font-bold text-blue-700 cursor-pointer hover:underline"
                              onClick={() => handleReadMore(index)}
                            >
                              Read More
                            </span>
                          </>
                        )}
                      </>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 border-t border-gray-100 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We believe in fostering a culture of creativity, responsibility, and excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-xl p-8 hover:bg-blue-50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 text-center reveal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Want to Work With Us?</h2>
          <p className="max-w-2xl mx-auto text-indigo-100 mb-6">
            We’re always looking for talented people to join our growing team. Let’s build something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Join Our Team
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
