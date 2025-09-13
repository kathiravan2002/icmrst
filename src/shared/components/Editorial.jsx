import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight, FaUniversity } from 'react-icons/fa';
import { FaArrowRightLong, FaCircleUser, FaLocationDot } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Editorial() {


    // const committeeData = [

    //     {
    //         members: 'Ali A.Abdul Saeed',
    //         university: 'Wasit university',
    //         location: 'Iraq'
    //     },
    //     {
    //         members: 'Robin Prakash Mathur',
    //         university: 'Lovely Professional University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Sirajuddin Qureshi',
    //         university: 'Beijing University of Technology',
    //         location: 'China'
    //     },
    //     {
    //         members: 'Sayan Das',
    //         university: ' St. Xaviers University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Mohammad Tolou Askari',
    //         university: 'Islamic Azad university',
    //         location: 'Iran'
    //     },
    //     {
    //         members: 'Pankaj Kumar Varshney',
    //         university: 'IITM Janakpuri',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Omar Bin Samin',
    //         university: 'Institute of Management Sciences',
    //         location: 'Pakistan'
    //     },
    //     {
    //         members: 'Chandrashekhar H. Patil',
    //         university: 'MIT World Peace University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Syed Asim Ali Shah',
    //         university: 'Bahria University',
    //         location: 'Pakistan'
    //     },
    //     {
    //         members: 'Pradip dhal',
    //         university: 'KIIT University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Monday O. Eze',
    //         university: 'Babcock University',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Rakesh Ranjan',
    //         university: 'UPES',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Adekunle Musibau Ibrahim',
    //         university: 'Osun State University',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Subhash Panwar',
    //         university: 'Govt. Engineering College Bikaner',
    //         location: 'India'
    //     },
    //     {
    //         members: ' Nor Musliza Mustafa',
    //         university: 'Universiti Islam Selangor',
    //         location: 'Malaysia'
    //     },
    //     {
    //         members: 'Theresa Omodunbi',
    //         university: 'Obafemi Awolowo University',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Sutapa C Sarkar',
    //         university: 'Brainware University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Masoud Asghari',
    //         university: 'University of Maragheh',
    //         location: 'Iran'
    //     },
    //     {
    //         members: 'Rohini Sharma',
    //         university: 'Panjab University',
    //         location: 'India'
    //     },

    //     {
    //         members: 'Aaron Izang',
    //         university: 'Babcock University',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Sinarring Azi Laga',
    //         university: ' Hayam Wuruk Perbanas University',
    //         location: 'Indonesia'
    //     },

    // ]


    const organizing = [

        {
            name: "Dr. Ali Rizwan",
            university: "King Abdulaziz University",
            expertise: " Department of Industrial Engineering",
            country: " Saudi Arabia"
        },

        {
            name: "Dr. Maryam Anwer",
            university: " Majma university",
            expertise: " Department of Industrial Engineering",
            country: " Saudi Arabia"
        },
        {
            name: "Dr. Qian Liu",
            university: " Krirk University",
            expertise: "Department of Information Technology",
            country: "Thailand"
        },
        {
            name: "Dr. Brahim Issaoui",
            university: " Qassim University",
            expertise: " Department of Economics and Social Sciences",
            country: " Saudi Arabia"
        },
        {
            name: "Dr. Mohammad Siraj",
            university: "  King Saud University",
            expertise: " Department of Electronics and Communication Engineering",
            country: "Saudi Arabia"
        },

    ]


    const technical = [
        {
            name: "Dr. Marcelo M S Souza",
            university: " Universidade Federal do Ceará",
            expertise: "Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            university: "International School of Information Processing Sciences",
            expertise: "Department of Computer Science and Engineering ",
            country: "France"
        },
        {
            name: "Dr. Puneet Sharma",
            university: "  UiT The Arctic University of Norway",
            expertise: " Department of Automation and Process Engineering",
            country: " Norway"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            university: "Cavendish University",
            expertise: " Department of Computer Science and Engineering",
            country: " Uganda"
        },
        {
            name: "Dr. Meng Zhang",
            university: "  Purification Equipment Research Institute of CSIC",
            expertise: " Department of Computer Science",
            country: "China"
        },
        {
            name: "Dr. Moses Adah Agana",
            university: "University of Calabar",
            expertise: "Department of Computer Science",
            country: " Nigeria"
        },
        {
            name: "Dr. Ammar Amjad",
            university: " National Yang ming chiao tung university",
            expertise: "Department of Computer Science and Engineering ",
            country: "Taiwan"
        },
        {
            name: "Dr. Leo John Baptist",
            university: "Botho University",
            expertise: "Department of Information Technology",
            country: " Botswana"
        },
        {
            name: "Dr. Mujtaba Korai",
            university: "Gachon University Korea",
            expertise: " Department of Computer Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Asma Sbeih",
            university: "Palestine Ahliya University",
            expertise: "Department of Information Technology ",
            country: "Palestine"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            university: " Qatar University",
            expertise: " Research Scientist at Qatar Mobility Innovations Center",
            country: " Qatar"
        },
        {
            name: "Dr. Meenakshi Gupta",
            university: " National University of Singapore",
            expertise: " Department of Electronics and Communication Engineering",
            country: "Singapore"
        },
        {
            name: "Dr. Yogi Pratama",
            university: "Al Insyirah Institute of Health and Technology",
            expertise: " Department of Medical Informatics",
            country: "Indonesia"
        },
        {
            name: "Dr. Shakar Ahmed Aziz",
            university: "Duhok University",
            expertise: " Department of Mathematics",
            country: "  Iraq"
        },
        {
            name: "Dr. Putri Mentari Endraswari",
            university: "  University of Bangka Belitung",
            expertise: " Department of Information Technology",
            country: "Indonesia"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            university: "Metropolitan Autonomous University",
            expertise: "Department of Electronics Engineering",
            country: "Mexico"
        },
        {
            name: "Dr. Arindom Kundu",
            university: "Daffodil International University",
            expertise: "Department of Computer Science and Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            university: "ESA Business School",
            expertise: " Department of Computer Science and Engineering",
            country: " Lebanon"
        },
        {
            name: "Dr.P. Punitha",
            university: "Tagore Institute of Engineering & Technology",
            expertise: "Department of Artificial Intelligence and Data Science",
            country: " India"
        },
        {
            name: "Dr. Stephen Ekwe",
            university: " University of Cape Town",
            expertise: " Department of Electrical Engineering",
            country: "South Africa"
        }
    ];


    const editorial = [
        {
            name: "Dr. Hung Nguyen",
            university: "Nha Trang university",
            expertise: " Department of Information Technology",
            country: "Vietnam"
        },
        {
            name: "Dr. Abdul Rehman Baloch",
            university: " Iqra University",
            expertise: " Department of Computer Science",
            country: "Pakistan"
        },
        {
            name: "Dr. Saminda Premaratne",
            university: " University of Moratuwa",
            expertise: "   Department of Information Technology",
            country: "Sri Lanka"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            university: "Cagayan State University",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Philippines"
        },
        {
            name: "Dr. Citra Fathia Palembang",
            university: "Pattimura University",
            expertise: " Department of Computer Science",
            country: " Indonesia "
        },
        {
            name: "Dr. Olaniyi S Maliki",
            university: "Michael Okpara Federal University",
            expertise: " Department of Mathematics ",
            country: "Nigeria"
        },
        {
            name: "Dr.V. Pravenea",
            university: "Dr.N.G.P Institute of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
        {
            name: "Dr. Moolchand Sharma",
            university: "Maharaja Agrasen Institute of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
        {
            name: "Dr. Qiushi Yang",
            university: "City University of Hong Kong",
            expertise: " Department of Electronic Engineering",
            country: "China"
        },
        {
            name: "Dr.  Huiliang Zhao",
            university: "Guizhou minzu University",
            expertise: " Department of product design",
            country: "China"
        },
        {
            name: "Dr. Folasade M. Dahunsi",
            university: "Federal University of Technology",
            expertise: " Department of Computer Science and Engineering",
            country: "Nigeria"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            university: "Cyprus International University",
            expertise: "Department of Computer Science and Engineering ",
            country: "Cyprus"
        },
        {
            name: "Dr.  Sakthivel Velusamy",
            university: " Konkuk University",
            expertise: " Department of Aerospace Information Engineering",
            country: " South Korea"
        },
        {
            name: "Dr. Dhana shree",
            university: "Sri Ramakrishna Engineering College",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
        {
            name: "Dr. Wasan Alamro",
            university: "Auckland University of Technology",
            expertise: "Department of Electrical and Electronics Engineering department ",
            country: " New Zealand"
        },
        {
            name: "Dr.A. Gabriel ",
            university: "Sharda University",
            expertise: "Department of Information Technology ",
            country: " Uzbekistan "
        },
        {
            name: "Dr. Mohammad Javad Fadaeieslam",
            university: "Semnan University",
            expertise: " Department of Electrical and Computer Engineering",
            country: " Iran"
        },
        {
            name: "Dr. Asghar Ali Shah",
            university: "Bahria University",
            expertise: " Department of computer science",
            country: "Pakistan"
        },
        {
            name: "Dr.M. Karthick",
            university: "Nandha college of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: " India"
        },
        {
            name: "Dr. Nor Musliza Mustafa",
            university: " Selangor Islamic University",
            expertise: "Department of Creative Multimedia and Computing",
            country: "Malaysia"
        },
        {
            name: "Dr. Nour Moustafa",
            university: "American University of the Middle East",
            expertise: "Department of Electronics and Communication Engineering",
            country: " Kuwait"
        },
        {
            name: "Dr. Stephen Obono Ekwe",
            university: "  University of Cape Town",
            expertise: " Department of Electrical Engineering",
            country: " South Africa"
        },
        {
            name: "Dr.R. Arun Kumar",
            university: "University of South Wales",
            expertise: " Department of Digital Forensics & Cyber Security",
            country: " United Kingdom"
        },
        {
            name: "Dr. Leandro N. Balico",
            university: "  Federal University of Roraima",
            expertise: " Department of Computer Science and Engineering ",
            country: "Brazil"
        },
        {
            name: "Dr. Twana A. Hamad",
            university: " Harran University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Turkiye"
        }
    ];



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
                {/* <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[26px] text-center mb-10">
                    Meet Our Editorial Board Members
                </h2> */}

                {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                        //         <p className="text-base inter-medium leading-[30px]  text-justify text-[#d12852]">{section.university},</p>
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
                                <p className="text-base inter-regular leading-[30px] opacity-85   flex items-center md:justify-center gap-3"><FaUniversity className='text-lg text-[#d12852] flex   shrink-0' />{section.university}</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85   flex items-center md:justify-center gap-3"><FaLocationDot className='text-lg text-[#d12852] flex shrink-0' />{section.location}</p>

                            </div>

                        </div>
                    )}
                </div> */}

                <div className="">
                    <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[26px] text-center mb-5 scroll-mt-[120px]" id="organizing-committee">
                        Organizing Committee
                    </h2>
                    <div className="space-y-2">
                        {organizing.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#d12852]' />
                                <p className="leading-relaxed "><span className=" text-[#d12852] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[26px] text-center mt-10 mb-5 scroll-mt-[120px]" id="technical-committee">
                        Technical Program Committee
                    </h2>
                    <div className="space-y-2">
                        {technical.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#d12852]' />
                                <p className="leading-relaxed "><span className=" text-[#d12852] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[26px] text-center mt-10 mb-5 scroll-mt-[120px]" id="advisory-committee">
                        International Advisory Board Committee Members
                    </h2>
                    <div className="space-y-2">
                        {editorial.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#d12852]' />
                                <p className="leading-relaxed "><span className=" text-[#d12852] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Editorial