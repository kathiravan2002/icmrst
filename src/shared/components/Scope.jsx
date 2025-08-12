import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Scope() {

    const data = [
        {
            title: "Pure and Applied Sciences",
            content: "Physics, chemistry, biology, mathematics, and environmental sciences, fostering innovative approaches that solve global challenges and drive sustainable advancements across various interdisciplinary scientific fields worldwide."
        },
        {
            title: "Engineering Disciplines",
            content: "Civil, mechanical, electrical, electronics, computer, and chemical engineering, encouraging creative, practical, and technology-driven solutions that transform industries, infrastructure, and communities while addressing pressing environmental and societal issues globally."
        },
        {
            title: "Emerging Technologies",
            content: "Artificial intelligence, robotics, nanotechnology, renewable energy, biotechnology, Internet of Things (IoT), and quantum computing, supporting innovations that enhance industry efficiency, sustainability, and overall quality of life worldwide."
        },
    ]
    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] poppins-medium text-white mt-10">Scope of the Conference</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] poppins-medium text-white hover:text-[#d12852] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] poppins-medium  text-[#d12852] ">Scope of the Conference</h2></div>

                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className=" flex items-center  justify-center group">
                        <div className="overflow-hidden rounded-[35px]  border-4 border-[#d12852]">
                            <img src="/images/scope.png" alt="aboutus" className="max-w-[505px] mx-auto group-hover:scale-105 duration-500 lg:block hidden" />
                        </div>
                        </div>
                        <div className="space-y-5 lg:space-y-0 flex   flex-col justify-center">
                            <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[24px] lg:text-start text-center">Conference Focus Areas</h2>
                            <div className=" flex items-center   justify-center max-w-[550px] mx-auto ">
                                <img src="/images/mission.jpg" alt="aboutus" className=" rounded-[35px] border-4 border-[#d12852] block lg:hidden " loading='lazy' />
                            </div>
                            <div className="space-y-3 mt-4">
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The scope of ICMRST spans a wide range of disciplines in science and technology, aiming to create a collaborative platform for researchers, scholars, industry professionals, and students. It encourages the integration of diverse expertise to address global challenges through innovative, multidisciplinary approaches that foster impactful and sustainable advancements in multiple sectors.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Key focus areas include natural sciences such as physics, chemistry, biology, and environmental studies, alongside engineering and technology domains like civil, mechanical, electrical, electronics, and computer science. The conference also covers applied sciences, nanotechnology, biotechnology, agricultural innovations, renewable energy, robotics, and other emerging interdisciplinary research areas driving technological and societal progress.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">By embracing this broad scope, ICMRST seeks to break traditional academic boundaries and promote cross-domain collaborations. It strives to ensure that research outcomes are not only innovative but also practical, scalable, and capable of delivering real-world solutions that benefit industries, communities, and global sustainable development goals.</p>
                            </div>
                        </div>
                    </div>
            </section>



            {/* <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[24px]  text-center">Research Areas</h2>
                <div className="space-y-2 mt-4">
                    {data.map((item, index) => (
                        <div className="space-y-2">
                            <h2 className="poppins-semibold text-xl text-[#d12852] ">{item.title}</h2>
                            <div className="flex items-center gap-2 "><TbPointFilled className='flex text-[18px] shrink-0 text-[#d12852]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">{item.content}</p></div>
                        </div>
                    ))}
                </div>
            </section> */}

        </div>
    )
}

export default Scope