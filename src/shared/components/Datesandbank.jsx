import React from 'react'
import { Link } from 'react-router-dom';
import { HiChevronDoubleRight } from 'react-icons/hi';

function Datesandbank() {
    const dates = [
        {
            title: 'Abstract Submission Deadline',
            date: '03-03-2025',
        },
        {
            title: 'Full Paper Submission Deadline',
            date: '07-03-2025',
        },
        {
            title: 'Notification of Acceptance',
            date: '14-03-2025',
        },
        {
            title: 'Final Paper Submission',
            date: '18-03-2025',
        },
        {
            title: 'Registration Deadline',
            date: '18-03-2025',
        },
        {
            title: 'Conference Dates',
            date: '26-03-2025',
        },
    ];
    return (
        <div>

            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] poppins-medium text-white mt-10">Important Dates</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] poppins-medium text-white hover:text-[#d12852] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] poppins-medium  text-[#d12852] ">Important Dates</h2></div>

                    </div>
                </div>
            </div>


            <section className="2xl:px-0 px-4 lg:py-15 py-10 max-w-[1400px]  mx-auto ">
                <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[24px]  text-center">
                    Important Dates
                </h2>
                <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 py-5">
                    <div className="space-y-3">
                        <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Timely preparation is essential for a successful conference experience. Below, we present all the key deadlines for paper submission, acceptance notifications, registration, and other significant milestones of the International Conference on Multidisciplinary Research in Science and Technology. We encourage all participants to review these dates carefully and plan ahead to ensure active engagement in the conference. Staying updated with the schedule will help you make the most of this multidisciplinary gathering.</p>
                    </div>
                </section>

                <div className="grid gap-6 md:grid-cols-3 mt-4 max-w-[1100px]  mx-auto">
                    {dates.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#d12852] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                                <div className="text-lg  text-center poppins-medium text-[#d12852]">
                                    {item.title}
                                </div>
                                 <div className=" mx-auto  py-3 ">
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d12852] to-transparent"></div>
                                </div>
                                <div className="text-lg text-center w-fit mx-auto  poppins-semibold text-[#1e1b4b]  px-4 py-1 rounded-full">
                                    {item.date}
                                </div>
                            
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default Datesandbank