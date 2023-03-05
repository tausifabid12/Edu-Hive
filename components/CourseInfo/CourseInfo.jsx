import React from 'react';
import { FaPlay } from 'react-icons/fa';

const CourseInfo = () => {
  const data = [
    {
      id: 1,
      title: 'Learn from the expert course mentor',
      img: '/assets/feature-1.jpg',
    },
    {
      id: 2,
      title: 'Discuss your future career goals',
      img: '/assets/feature-2.jpg',
    },
    {
      id: 3,
      title: 'Mentorship and community support',
      img: '/assets/feature-3.jpg',
    },
    {
      id: 4,
      title: 'Taught by industry professionals',
      img: '/assets/feature-4.jpg',
    },
  ];
  return (
    <section className="py-28 px-3 lg:px-0 lg:mx-14 ">
      <div className="flex flex-col justify-center">
        <div className="flex items-center space-x-1 mx-auto">
          <p className="w-7 h-1 bg-accent"></p>
          <p className="text-accent font-bold capitalize">FEATURES</p>
          <p className="w-7 h-1 bg-accent"></p>
        </div>

        <h1 className="text-4xl font-bold text-primary text-center">
          Why Take This Course
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-20 gap-5">
          {data.map((d) => (
            <div className="w-full h-[350px]  shadow-lg rounded-lg relative cursor-pointer">
              <img
                src={d.img}
                className="w-full h-full rounded-lg transition-all duration-200 hover:scale-125"
                alt=""
              />
              <div className="w-full h-full bg-black/40 absolute top-0 rounded-lg"></div>
              <div className="absolute bottom-0 p-8">
                <p className=" rounded-full text-accent inline-block bg-white">
                  <FaPlay size={13} className="m-3" />
                </p>
                <p className="text-xl font-bold text-white">{d.title}</p>
              </div>
            </div>
          ))}{' '}
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
