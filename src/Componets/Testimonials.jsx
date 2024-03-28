// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
    {
        image: 'https://www.rasmussen.edu/images/rasmussenlibraries/open-graph/network-systems-administration-og.jpg',
        name: 'Chanlet Mary',
        title: 'Web Developer',
        description: "Chanlet Mary is a senior developer at Google with over 10 years of experience. She has a strong background in web development and has contributed to various projects during her tenure at Google. Her expertise lies in developing robust and efficient web applications, and she is known for her problem-solving skills and attention to detail.",
    },
    {
        image: 'https://www.goodthingsguy.com/wp-content/uploads/2021/08/women-in-tech.jpg',
        name: 'Jane Win',
        title: 'Data Analyst',
        description: "Jane Win is a skilled Data Analyst with expertise in data analysis and interpretation. She has a proven track record of delivering actionable insights from complex datasets. Jane is known for her analytical mindset and ability to communicate effectively with stakeholders to drive data-driven decisions.",
    },
    {
        image: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/mining%20for%20tech%20talent%20gold%20seven%20ways%20to%20find%20and%20keep%20diverse%20talent/thumb-gettyimages-1334004087.jpg',
        name: 'Joel Amina',
        title: 'Google AI Developer',
        description: "Joel Amina is an experienced Google AI Developer specializing in machine learning algorithms. With a deep understanding of artificial intelligence and its applications, Joel has contributed to various AI projects at Google. He is passionate about harnessing the power of AI to solve real-world problems and drive innovation.",
    },
    {
        image: 'https://miro.medium.com/proxy/0*HXUeYo4_zynsdoN0.png',
        name: 'Marshal Jamal',
        title: 'Cyber Security Expert',
        description: "Marshal Jamal is a highly skilled Cyber Security Expert with extensive experience in network security. He has a comprehensive understanding of cybersecurity threats and measures to mitigate them. Marshal has worked on numerous cybersecurity projects, ensuring the protection of sensitive data and infrastructure. He is dedicated to staying updated with the latest trends in cybersecurity to combat emerging threats effectively.",
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
        <div className="max-w-4xl mx-auto mt-6" >
            <h1 className="text-3xl font-bold flex justify-center items-center underline text-blue-700 uppercase">Testimonials</h1>
            <Slider {...settings} className="mt-4 mb-6">
                {Data.map((d, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg">
                        <div className="mb-4">
                            <img src={d.image} alt={d.name} className="w-48 h-48 object-cover rounded-full mx-auto" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-center">{d.name}</h2>
                        <h3 className="text-blue-600 text-lg mt-2 text-center">{d.title}</h3>
                        <p className="text-gray-800 text-sm mt-2 text-center">{d.description}</p>
                        <div className="flex justify-center mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;

