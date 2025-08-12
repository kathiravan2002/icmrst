import React from 'react'


function Registerpage() {
    return (
        <div>
            <section className="relative bg-center  bg-cover" style={{ backgroundImage: ('url(/images/bcw.jpg)') }}>
                <div className="absolute inset-0 bg-[#000] opacity-45"></div>
                <div className="relative max-w-[1200px] mx-auto 2xl:px-0 px-4 py-10 ">
                    <h2 className="poppins-semibold text-white text-xl text-center">Mark Your Calendar</h2>
                    <p className="poppins-bold text-[#d12852] text-3xl text-center mt-2">Important Dates</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                        <div className=" bg-white  backdrop-blur-[10px] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-5 ">
                                <p className="poppins-bold text-[#d12852] text-lg text-center">12<sup className="">th</sup>  March ,2025</p>
                                <p className="poppins-semibold text-base text-center  mt-4">Paper Submission Deadline Final Extension</p>
                        </div>
                        <div className="bg-white   backdrop-blur-[10px] shadow-[0_0_10px_rgba(0,0,0,0.15)]  rounded-lg p-5">
                            <p className="poppins-bold text-[#d12852]  text-lg text-center">18<sup className="">th</sup> March, 2025</p>
                            <p className="poppins-semibold text-base   text-center mt-4">Author Acceptance Notification Description</p>
                        </div>
                        <div className="bg-white   backdrop-blur-[10px] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-5">
                            <p className="poppins-bold text-[#d12852] text-lg text-center">26<sup className="">th</sup> March, 2025</p>
                            <p className="poppins-semibold text-base  text-center  mt-4">Final Manuscript Submission Guidelines</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Registerpage