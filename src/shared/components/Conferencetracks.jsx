import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';



function Conferencetracks() {


    const roles = [
        {
            title: 'Artificial Intelligence',
            duties: [
                'Innovations in AI, deep learning, and automation-driven technologies.'
            ]
        },
        {
            title: 'Data Analytics',
            duties: [
                ' Converting data into valuable insights using predictive modeling tools.'
            ]
        },
        {
            title: 'Smart Systems ',
            duties: [
                ' Integrating intelligent devices for automation, monitoring, and decision-making.'
            ]
        },
        {
            title: 'Renewable Energy',
            duties: [
                'Advancing sustainable power solutions for environmental conservation and global needs.'
            ]
        },
        {
            title: 'Advanced Nanotechnology',
            duties: [
                'Developing nanoscale materials for electronics, medicine, and industrial engineering.'
            ]
        },
        {
            title: 'Modern Robotics',
            duties: [
                ' Designing autonomous machines for manufacturing, healthcare, and daily assistance.'
            ]
        },
        {
            title: 'Life Sciences',
            duties: [
                'Exploring biology, genetics, and medical innovations for better health.'
            ]
        },

        {
            title: 'Network Security',
            duties: [
                'Protecting digital communication, data integrity, and online privacy worldwide.'
            ]
        },
        {
            title: 'Aerospace Engineering',
            duties: [
                'Creating advanced aircraft, spacecraft, and futuristic space exploration systems.'
            ]
        },
      
    ];
    return (
        <div>

            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] poppins-medium text-white mt-10">Conference Tracks</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] poppins-medium text-white hover:text-[#d12852] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] poppins-medium  text-[#d12852] ">Conference Tracks </h2></div>

                    </div>
                </div>
            </div>
          

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="space-y-3">
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Multidisciplinary Research in Science and Technology features a diverse range of tracks designed to foster collaboration across multiple domains. These tracks provide a platform for researchers, academicians, industry professionals, and innovators to share groundbreaking ideas, present their latest findings, and explore emerging trends. Each track focuses on a specialized area within science and technology, encouraging interdisciplinary discussions that lead to innovative solutions for global challenges. Participants can engage in thought-provoking sessions, technical presentations, and collaborative dialogues, ensuring a rich exchange of knowledge that transcends traditional academic boundaries.</p>
                </div>
            </section>
            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <div className="text-center mb-8">
                    <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[24px]  text-center">Conference Tracks</h2>
                </div>

               
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
                    {roles.map((r) => (
                        <article key={r.title} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-[#d12852]">
                            <div className="flex items-center justify-between ">
                                <h3 className="text-xl text-[#d12852] poppins-semibold">{r.title}</h3>

                            </div>
                            <div className=" mx-auto  py-3 ">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d12852] to-transparent"></div>
                            </div>
                            <ul className="space-y-2  list-disc list-disc-[#d12852]  px-4">
                                {r.duties.map((d, i) => (
                                    <li key={i} className="text-base inter-regular leading-[30px] opacity-85  text-justify ">{d}</li>
                                ))}
                            </ul>

                        </article>
                    ))}
                </div>
            </section>
           



        </div>
    )
}

export default Conferencetracks