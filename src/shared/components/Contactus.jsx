import React, { useState } from 'react'
import { IoLocation } from 'react-icons/io5'
import { toast } from 'react-toastify';
import { IoIosMail } from 'react-icons/io';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            const response = await fetch('https://icmrst.org/api/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const result = await response.text();
            setStatus(result);
            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (

        <div>
            {/* Header Section */}
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] poppins-medium text-white mt-10">Contact Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] poppins-medium text-white hover:text-[#d12852] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] poppins-medium  text-[#d12852] ">Contact Us</h2></div>

                    </div>
                </div>
            </div>

            <div className="text-black max-w-[1300px] mx-auto lg:py-15 py-10 px-4  " >
                <div className="  flex lg:flex-row flex-col  gap-10">
                    <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5">
                        <div className="mb-6 text-center">
                            <h3 className="text-2xl poppins-semibold text-[#d12852] py-4">Get in Touch</h3>
                            <p className="text-base inter-regular leading-[30px] opacity-85 text-center">
                                We welcome your inquiries. For questions regarding submissions, registration, or general conference information, our team is ready
                                to assist you.
                            </p>
                        </div>

                        <div className=" p-4 rounded-lg mb-6 text-center">
                            <h4 className="text-xl poppins-semibold text-[#d12852] py-4">Conference Secretariat</h4>
                            <p className="text-base inter-regular leading-[30px] opacity-85 mb-4">International Conference on Multidisciplinary Research in Science and Technology</p>
                            <div className="flex gap-5 flex-col lg:flex-row justify-center items-center">
                                <div className="flex gap-2  items-center"><IoIosMail className='flex text-[24px] shrink-0 text-[#d12852]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify wrap-anywhere"> icmrst.org@gmail.com</p></div>
                                <div className="flex gap-2  items-center"><IoLocation className='flex text-[24px] shrink-0 text-[#d12852]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify "> Dhahran, Saudi Arabia</p></div>
                            </div>
                        </div>
                    </div>


                    <div className='max-w-[700px] mx-auto w-full bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5'>
                        <h3 className="text-2xl poppins-semibold text-center py-4 text-[#d12852]">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block poppins-semibold mb-1">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#d12852] rounded-md p-2 poppins-medium shadow-sm text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-semibold mb-1">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="secondname"
                                        value={formData.secondname}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#d12852] rounded-md p-2 poppins-medium shadow-sm text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-semibold mb-1">Email <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#d12852] rounded-md poppins-medium p-2 shadow-sm text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-semibold mb-1 ">Phone Number <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border-2 border-gray-300 outline-[#d12852] rounded-md p-2 poppins-medium shadow-sm text-base"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block poppins-semibold mb-1">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFileInputChange}
                                    rows="3"
                                    required
                                    className="w-full border-2 border-gray-300 outline-[#d12852] rounded-md poppins-medium p-2 shadow-sm text-base resize-none"
                                ></textarea>
                            </div>

                            <div className="text-center w-fit  rounded-md mx-auto">
                                <button type='submit' className="group bg-[#262341] text-white poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2"
                                        style={{ boxShadow: '0 4px 0 #a01d42, 0 8px 15px rgba(209, 40, 82, 0.3)' }}>
                                    {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                                        {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> */}

                                    </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contactus