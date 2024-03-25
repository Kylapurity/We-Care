
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSmile } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineSchedule } from 'react-icons/ai';
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-4xl mr-4" />
                <div>
                    <h2 className="text-xl font-bold mb-2">Message Us</h2>
                    <p className="text-gray-700">Were here to answer any questions you may have.</p>
                </div>
            </div>
            <div className="flex items-center mb-4">
                <AiOutlineSchedule className="text-blue-500 text-4xl mr-4" />
                <div>
                    <h2 className="text-xl font-bold mb-2">Online Classes</h2>
                    <p className="text-gray-700">Join our online classes and learn at your own pace.</p>
                </div>
            </div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faSmile} className="text-blue-500 text-4xl mr-4" />
                <div>
                    <h2 className="text-xl font-bold mb-2">Happy Faces</h2>
                    <p className="text-gray-700">We strive to make our customers happy and satisfied.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

