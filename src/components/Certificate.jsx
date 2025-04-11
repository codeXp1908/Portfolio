import React from "react";
import { Carousel } from "flowbite-react"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";

const Certificate = () => {
  // Correct way to define the certificates array
  const certs = [
    { img: cert1 },
    { img: cert2 },
    { img: cert3 },
    { img: cert4 },
    { img: cert5 },
    { img: cert6 },
  ];

  return (
    <div className="certificate_Container h-screen w-full body">
      <div className="certificate_Title text-gray-700 text-6xl uppercase font-bold underline underline-offset-8 p-10">
        <h1>Certificates</h1>
      </div>
      <div className="certificate_Slider flex items-center justify-center p-10 h-[90%]">
        <div className="h-full w-full max-w-7xl">
          <Carousel slideInterval={1000} leftControl={<FaChevronLeft className="text-3xl" />} rightControl={<FaChevronRight className="text-3xl" />}>
            {certs.map((cert, index) => (
              <img 
                key={index} 
                src={cert.img} 
                alt={`Certificate ${index + 1}`}
                className="h-full w-full rounded-2xl"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
