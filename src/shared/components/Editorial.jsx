import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight, FaUniversity } from 'react-icons/fa';
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Editorial() {


    const committeeData = [

        {
            members: 'Ali A.Abdul saeed',
            university: 'Wasit university',
            location: 'Iraq'
        },
        {
            members: 'Robin Prakash Mathur',
            university: 'Lovely Professional University',
            location: 'India'
        },
        {
            members: 'Sirajuddin Qureshi',
            university: 'Beijing University of Technology',
            location: 'China'
        },
        {
            members: 'Sayan Das',
            university: ' St. Xaviers University',
            location: 'India'
        },
        {
            members: 'Mohammad Tolou Askari',
            university: 'Islamic Azad university',
            location: 'Iran'
        },
        {
            members: 'Pankaj Kumar Varshney',
            university: 'IITM Janakpuri',
            location: 'India'
        },
        {
            members: 'Omar Bin Samin',
            university: 'Institute of Management Sciences',
            location: 'Pakistan'
        },
        {
            members: 'Chandrashekhar H. Patil',
            university: 'MIT World Peace University',
            location: 'India'
        },
        {
            members: 'Syed Asim Ali Shah',
            university: 'Bahria University',
            location: 'Pakistan'
        },
        {
            members: 'Pradip dhal',
            university: 'KIIT University',
            location: 'India'
        },
        {
            members: 'Monday O. Eze',
            university: 'Babcock University',
            location: 'Nigeria'
        },
        {
            members: 'Rakesh Ranjan',
            university: 'University of Petroleum and Energy Studies',
            location: 'India'
        },
        {
            members: 'Adekunle Musibau Ibrahim',
            university: 'Osun State University',
            location: 'Nigeria'
        },
        {
            members: 'Subhash Panwar',
            university: 'Govt. Engineering College Bikaner',
            location: 'India'
        },
        {
            members: ' Nor Musliza Mustafa',
            university: 'Universiti Islam Selangor',
            location: 'Malaysia'
        },
        {
            members: 'Theresa Omodunbi',
            university: 'Obafemi Awolowo University',
            location: 'Nigeria'
        },
        {
            members: 'Sutapa C Sarkar',
            university: 'Brainware University',
            location: 'India'
        },
        {
            members: 'Masoud Asghari',
            university: 'University of Maragheh',
            location: 'Iran'
        },
        {
            members: 'Rohini Sharma',
            university: 'Panjab University',
            location: 'India'
        },
        
        {
            members: 'Masoud Asghari',
            university: 'University of Maragheh',
            location: 'Saudi Arabia'
        },
        {
            members: 'Sinarring Azi Laga',
            university: ' Hayam Wuruk Perbanas University',
            location: 'Indonesia'
        },
        
    ]


    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] poppins-medium text-white mt-10">Editorial Board</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] poppins-medium text-white hover:text-[#d12852] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] poppins-medium  text-[#d12852] ">Editorial Board</h2></div>

                    </div>
                </div>
            </div>
            <section className="max-w-[1300px] mx-auto px-4 py-12">
                <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[26px] text-center mb-10">
                    Meet Our Editorial Board Members
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {committeeData.map((section, index) =>
                        // <div
                        //     key={index}
                        //     className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                        // >
                        //     <div className="p-3 flex flex-col items-center text-center">
                        //         <div className="w-10 h-10 rounded-full bg-[#fcac45] flex items-center justify-center text-white text-xl poppins-semibold mb-4">
                        //             {section.firstLetter}
                        //         </div>
                        //         <p className="text-lg inter-medium leading-[30px] opacity-85 text-justify">Dr. {section.members},</p>
                        //         <p className="text-base inter-medium leading-[30px]  text-justify text-[#881B1B]">{section.university},</p>
                        //         <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">{section.location}.</p>

                        //     </div>
                        // </div>
                        <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-[#d12852]">
                            <div className="flex items-center justify-center ">
                                <h3 className="text-xl text-[#d12852] poppins-semibold text-center">Dr. {section.members}</h3>

                            </div>
                            <div className=" mx-auto  py-3 ">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d12852] to-transparent"></div>
                            </div>
                            <div className="space-y-2   px-2">
                                <p className="text-base inter-regular leading-[30px] opacity-85  text-center flex items-center justify-center gap-3"><FaUniversity className='text-lg text-[#d12852] flex   shrink-0' />{section.university}</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85  text-center flex items-center justify-center gap-3"><FaLocationDot className='text-lg text-[#d12852] flex shrink-0' />{section.location}</p>

                            </div>

                        </div>
                    )}
                </div>
            </section>


        </div>
    )
}

export default Editorial