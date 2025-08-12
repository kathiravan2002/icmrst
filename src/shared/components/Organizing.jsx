import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Organizing() {




const roles=[
    {
        title: 'General Chair',
        duties: [
            'Provide overall leadership, vision, and direction for ICMRST.',
            'Oversee all planning activities and approve the final conference agenda and policies.',
            'Represent ICMRST in official communications, collaborations, and external partnerships.'
        ]
    },
    {
        title: 'Deputy Chair',
        duties: [
            'Assist the General Chair in decision-making and conference execution.',
            'Coordinate activities among committees and act in place of the Chair when required.',
            'Address logistical or program-related challenges during the conference.'
        ]
    },
    {
        title: 'Technical Program Chair',
        duties: [
            'Design and manage the technical program, including defining tracks and session themes.',
            'Supervise the abstract and paper review process, ensuring fairness and quality.',
            'Plan keynote, plenary, and invited speaker sessions.'
        ]
    },
    {
        title: 'Organizing Secretary',
        duties: [
            'Oversee conference administration, correspondence, and official documentation.',
            'Manage schedules, meetings, and timelines across all committees.',
            'Serve as the central contact point for delegates, presenters, and partners.'
        ]
    },
    {
        title: 'Finance Manager',
        duties: [
            'Develop and monitor the conference budget and financial statements.',
            'Manage registration income, sponsorship funding, and reimbursements.',
            'Ensure transparent accounting practices and compliance with institutional and legal requirements.'
        ]
    },
    {
        title: 'Marketing & Outreach Chair',
        duties: [
            'Develop and implement the promotional strategy for ICMRST.',
            'Manage social media, email campaigns, newsletters, and press releases.',
            'Engage with academic networks, sponsors, and partners to enhance conference visibility.'
        ]
    },
    {
        title: 'Publications Chair',
        duties: [
            'Oversee the collection, review, and formatting of accepted papers for publication.',
            'Coordinate with publishers and indexing databases for post-conference dissemination.',
            'Ensure publication quality and adherence to editorial guidelines.'
        ]
    },
    {
        title: 'Sponsorship Coordinator',
        duties: [
            'Identify and approach potential sponsors, partners, and funding agencies.',
            'Prepare sponsorship proposals and maintain sponsor relationships.',
            'Ensure all sponsorship commitments and branding deliverables are met.'
        ]
    },
    {
        title: 'Volunteer Manager',
        duties: [
            'Recruit, train, and manage volunteers for on-site and virtual support.',
            'Create and distribute volunteer schedules and task lists.',
            'Address volunteer needs and ensure smooth coordination during the event.'
        ]
    }
];
    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] poppins-medium text-white mt-10">Organizing Committee</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] poppins-medium text-white hover:text-[#d12852] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] poppins-medium  text-[#d12852] ">Organizing Committee</h2></div>

                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="space-y-3">
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The Organizing Committee of the International Conference on Multidisciplinary Research in Science and Technology is dedicated to ensuring the success of this prestigious global event. Comprising distinguished academicians, industry experts, and research professionals from diverse fields, the committee works collaboratively to curate a high-quality program that reflects the conference’s multidisciplinary vision.</p>
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Their responsibilities include planning the conference structure, selecting keynote speakers, reviewing submissions, and ensuring that every session fosters meaningful knowledge exchange. The committee also focuses on creating opportunities for networking, collaboration, and professional development for participants from across the world.</p>
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">With their combined expertise and commitment, the Organizing Committee strives to deliver a world-class conference experience that inspires innovation, promotes interdisciplinary dialogue, and contributes significantly to advancements in science and technology on a global scale.</p>
                </div>
            </section>
            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">
                <div className="text-center mb-8">
                    <h2 className="text-[#d12852] poppins-semibold lg:text-[34px] text-[24px]  text-center">Organizing Committee — Roles & Responsibilities</h2>
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

export default Organizing