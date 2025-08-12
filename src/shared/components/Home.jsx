import { ArrowRight } from 'lucide-react';
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Home() {


    const researchAreas = [
        {
            title: "Quantum Computing",
            content: "Explore quantum algorithms, hardware, and applications for complex problems."
        },
        {
            title: "Climate Technologies",
            content: "Innovative solutions for emissions reduction and sustainable climate practices."
        },
        {
            title: "Synthetic Biology",
            content: "Design biological systems for medicine, agriculture, and industry applications."
        },
        {
            title: "Smart Systems",
            content: "Connect devices for automation in homes, cities, and industries."
        },
        // {
        //     title: "Blockchain and Decentralized Technologies",
        //     content: "Study the underlying principles of blockchain, its applications in secure transactions, smart contracts, and decentralized finance, along with emerging decentralized web technologies."
        // }
    ];
    return (
        <div >
            <div className="relative sm:h-screen bg-cover " style={{ backgroundImage: "url('/images/homehero.png')" }}>

                <div className="absolute inset-0 bg-[#000000] sm:h-screen opacity-55"></div>
                <div className="flex justify-center items-center h-full max-w-[1400px] mx-auto">
                    <div className=" relative z-10 mt-28  sm:mt-0 md:mt-0 lg:mt-15 flex flex-col 2xl:space-y-8 xl:space-y-5 lg:space-y-5 space-y-5 justify-center max-w-[900px] px-4 py-4 lg:py-0">
                        <h1 className="2xl:text-[36px] xl:text-[32px] lg:text-[28px] md:text-[28px] text-[26px] namdhinggo-extrabold text-[#d12852] text-center ">International Conference on Multidisciplinary Research in Science and Technology</h1>
                        <p className="text-[16px] md:text-[18px] leading-[30px] text-justify lg:text-center inter-regular text-white">Fostering global collaboration, innovation, and knowledge exchange, this conference unites researchers, scholars, and professionals to address challenges and advancements across diverse scientific and technological disciplines.</p>
                        <div className="flex md:flex-row flex-col md:justify-center justify-center items-center gap-5 lg:gap-10 ">
                            <div className="flex  gap-4 "><FaCalendarAlt className='text-[#d12852]   text-[28px]' /> <h2 className="text-white namdhinggo-extrabold md:text-[24px] text-[20px]">March 26, 2025</h2></div>
                            <div className="flex  gap-4 "><IoLocationSharp className='text-[#d12852]   text-[28px]' /> <h2 className="text-white namdhinggo-extrabold md:text-[24px] text-[20px]">Dhahran, Saudi Arabia</h2></div>
                        </div>

                        <Link to="/paper-submission">
                            <div className="bg-[#d12852] py-2 px-3 w-fit rounded-lg mx-auto cursor-pointer">
                                <h2 className="inter-medium lg:text-lg text-base text-white flex items-center gap-2">Paper Submit Now   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /></h2>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <section className="max-w-[1400px] mx-auto  2xl:px-0 px-4 lg:py-15 py-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className="space-y-5 lg:space-y-0">
                        <h2 className="text-[#262341] poppins-semibold lg:text-[34px] text-[24px] lg:text-start text-center">About Us</h2>
                        <div className=" flex items-center   justify-center max-w-[400px] mx-auto ">
                            <img src="/images/aboutus.png" alt="aboutus" className=" rounded-[35px] border-4 border-[#d12852] block lg:hidden " loading='lazy' />
                        </div>

                        <div className="space-y-3 mt-4">
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Our conference promotes innovation and interdisciplinary collaboration, bringing together global researchers, scholars, and professionals to exchange knowledge, tackle challenges, and explore cutting-edge advancements in science and technology, fostering impactful solutions for societal and industrial growth.</p>
                        </div>

                        <div className="mt-5">
                            <div className="space-y-2">
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#d12852] ">Cross-Disciplinary Integration</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#d12852]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Uniting diverse scientific and technological disciplines to create comprehensive, innovative, and impactful research solutions.</p></div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#d12852] ">Innovative Approaches</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#d12852]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Promoting creative methodologies that merge multiple fields to address complex global scientific and technological challenges.</p></div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="poppins-semibold text-xl text-[#d12852] ">Research Diversity</h2>
                                    <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#d12852]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify "> Covering natural sciences, engineering, technology, and applied sciences for a holistic multidisciplinary research environment.</p></div>
                                </div>
                                {/* <Link to="/about" className='flex justify-start items-start'>
                                    <div className="bg-[#d12852] w-fit  text-white rounded-lg duration-300 lg:mt-4 mt-2 group overflow-hidden">
                                        <button className='lg:text-lg text-base inter-bold py-2 px-4 cursor-pointer flex gap-2 items-center group-hover:scale-110 duration-300'>Read more <FaArrowRightLong className='group-hover:translate-x-1 duration-300 ' /></button>
                                    </div>
                                </Link> */}
                                <Link to="/about" className="flex justify-start items-start">
                                    <button className="group bg-[#262341] text-white poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2"
                                        style={{ boxShadow: '0 4px 0 #a01d42, 0 8px 15px rgba(209, 40, 82, 0.3)' }}>
                                        Read more
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className=" flex items-center  justify-center group lg:block hidden ">
                        <div className="overflow-hidden rounded-[35px] border-4 border-[#d12852]">
                            <img src="/images/aboutus.png" alt="aboutus" className="max-w-[505px] mx-auto  group-hover:scale-105 duration-500 " />
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <h2 className="text-[#262341] poppins-semibold lg:text-[34px] text-[24px] text-center mb-10">Key Research Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {researchAreas.map((area, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-[#d12852]">
                            <h3 className="poppins-semibold text-xl text-[#d12852] ">{area.title}</h3>
                             <div className=" mx-auto  py-3 ">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d12852] to-transparent"></div>
                            </div>
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-justify  ">{area.content}</p>
                            {/* <div className="container mx-auto px-4 py-4 ">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#881B1B] to-transparent"></div>
                            </div> */}
                        </div>

                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home