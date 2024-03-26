// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaUser, FaComments, FaBookOpen, FaSmile } from 'react-icons/fa';
import Card from './Card';

const About = () => {
  return (
    <div className="container mx-auto" id='about'>
      <h1 className="text-3xl font-bold mt-6 uppercase" href="#about">About Us</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card icon={<FaUser />} title="Our Team">
        <p>Our team consists of experienced professionals from various fields who are passionate about making a positive impact on the lives of young individuals.</p>
        </Card>
        <Card icon={<FaComments />} title="Our Mission">
          <p>To Save our Youths from Been lost with lack of skills and Know how to be ventures of saving the Economy</p>
        </Card>
        <Card icon={<FaBookOpen />} title="Our Education">
          <p>We will be offeering mentorships, Enterprnuers skill, Online class to advance their skills and alos we will be offeering first seed money to every venture.</p>
        </Card>
        <Card icon={<FaSmile />} title="Easy To use">
          <p>To get acces to our platform we  the students will be paying $1 per month and if they cant access it we will be offeering a basic free</p>
        </Card>
      </div>
    </div>
  );
};

export default About;


