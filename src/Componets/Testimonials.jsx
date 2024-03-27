// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9pAEEgK_VhZRHRaqAXV8ygzhi6VJULqcif5W6ySbaF5Cofgs9W2C_pxHUOmUZR2T1io&usqp=CAU',
        name : 'Chanlet Mary',
        title : 'Web Developer',
        description: " I am Chanlet Mary, a senior developer at Google. I have been working with Google for the past 10 years. I have worked on various projects and have gained a lot of experience in the field of web development. I have also worked on various projects and have gained a lot of experience in the field of web development.",
    },
    {
        image : 'https://www.brookings.edu/wp-content/uploads/2022/11/shutterstock_2136404171_small.jpg',
        name : 'Jane Win',
        title : 'Data Anylast ',
        description: "",
    },
    {
        image : 'https://images.unsplash.com/photo-1544717296-02368e0e3b6f',
        name : 'Joel Amina',
        title : 'Goggle AI Developer',
        description: "",
    },
    {
        image : 'https://miro.medium.com/proxy/0*HXUeYo4_zynsdoN0.png',
        name : 'Marshal Jamal',
        title : 'Cyber Security Expert',
        description: "",
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };      

    return (
        <div>
            <h1 className="text-3xl font-bold mt-6 flex justify-center items-center underline text-blue-700 uppercase">Testimonials</h1>
            <Slider {...settings}>
                {Data.map((d, index) => (
                    <div key={index} className="p-6 bg-gray-100 rounded-lg">
                        <div className="mb-4">
                            <img src={d.image} alt="course" className="w-48 h-auto object-cover rounded-full mx-auto" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{d.name}</h2>
                        <h3 className="text-blue-600 text-lg mt-2">{d.title}</h3>
                        <p className="text-gray-800 text-sm mt-2">{d.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;

