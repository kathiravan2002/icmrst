import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function About() {


    const data = [
        {
            title: "Knowledge Enhancement",
            content: "Gain deep insights into recent advancements, emerging research trends, and breakthrough technological innovations in science, engineering, and technology, empowering participants to stay updated and competitive in their respective professional and academic fields."
        },
        {
            title: "Networking Opportunities",
            content: "Connect and interact with renowned researchers, industry leaders, innovators, and academicians worldwide, building meaningful relationships that foster collaboration, mentorship, and professional growth while expanding your global research and innovation network."
        },
        {
            title: "Research Visibility",
            content: "Present and showcase your work to an international audience, gaining recognition while receiving valuable expert feedback that refines research quality and enhances credibility within global scientific, engineering, and technological communities."
        },
        {
            title: "Publication Opportunities",
            content: "Get accepted papers published in high-quality journals or indexed conference proceedings, increasing research visibility, academic credibility, and citation potential while contributing to global scientific, engineering, and technological knowledge databases."
        },
        {
            title: "Exposure to Innovations",
            content: "Discover cutting-edge tools, technologies, and research methodologies shaping the future of science, engineering, and technology, while gaining practical insights into their applications in solving complex, real-world challenges."
        },
    ]


    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] poppins-medium text-white mt-10">About Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] poppins-medium text-white hover:text-[#d12852] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] poppins-medium  text-[#d12852] ">About The Conference</h2></div>

                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className=" flex items-center  justify-center group">
                        <div className="overflow-hidden rounded-[35px] border-4 border-[#d12852] lg:block hidden">
                            <img src="/images/about.jpg" alt="aboutus" className="max-w-[505px] mx-auto group-hover:scale-105 duration-500 " />
                        </div>
                        </div>
                        <div className="space-y-5 lg:space-y-0 flex   flex-col justify-center">
                            <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[24px] lg:text-start text-center">About ICMRST 2025</h2>
                            <div className=" flex items-center   justify-center max-w-[550px] mx-auto  ">
                                <img src="/images/about.jpg" alt="aboutus" className=" rounded-[35px] border-4 border-[#d12852] block lg:hidden " loading='lazy' />
                            </div>
                            <div className="space-y-3 mt-4">
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Multidisciplinary Research in Science and Technology unites global experts to share insights, collaborate, and innovate across disciplines, fostering impactful research solutions that address complex global challenges and drive advancements in science, technology, and society.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">ICMRST promotes cross-disciplinary integration, connecting professionals from diverse scientific and technological backgrounds. The conference encourages groundbreaking discoveries, innovative thinking, and practical applications, contributing to sustainable development, industrial progress, and knowledge expansion while inspiring collaboration between academia, research institutions, and industry worldwide.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Dedicated to bridging research and practice, ICMRST provides a valuable platform for presenting findings, networking, and forming partnerships. Participants enhance expertise, explore cutting-edge trends, and create impactful solutions that address real-world problems across multiple scientific and technological domains.The Selective accepted papers of our International Conference on Multidisciplinary Research in Science and Technology will be recommended to publish in the indexed Journals. </p>
                            </div>
                        </div>
                    </div>
            </section>



            {/* <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <h2 className="text-[#881B1B] poppins-semibold lg:text-[34px] text-[24px]  text-center">Benefits of Participation</h2>
                <div className="space-y-2 mt-4">
                    {data.map((item,index)=>(
                    <div className="space-y-2">
                        <h2 className="poppins-semibold text-xl text-[#881B1B] ">{item.title}</h2>
                        <div className="flex items-center gap-2 "><TbPointFilled className='flex text-[18px] shrink-0 text-[#881B1B]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">{item.content}</p></div>
                    </div>
                    ))}
                </div>
            </section> */}


        </div>
    )
}

export default About