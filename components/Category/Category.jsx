import React from 'react';
import { FcSelfie } from 'react-icons/fc';

const Category = () => {
  const data = [
    {
      id: 1,
      name: 'Design',
      icon: <FcSelfie />,
    },
    {
      id: 2,
      name: 'Design',
      icon: <FcSelfie />,
    },
    {
      id: 3,
      name: 'Design',
      icon: <FcSelfie />,
    },
    {
      id: 4,
      name: 'Design',
      icon: <FcSelfie />,
    },
    {
      id: 5,
      name: 'Design',
      icon: <FcSelfie />,
    },
    {
      id: 6,
      name: 'Design',
      icon: <FcSelfie />,
    },
    {
      id: 7,
      name: 'Design',
      icon: <FcSelfie />,
    },
    {
      id: 8,
      name: 'Design',
      icon: <FcSelfie />,
    },
  ];
  return (
    <section className="mt-14 px-3 lg:px-14">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center justify-center lg:justify-start space-x-1">
            <p className="w-7 h-1 bg-accent"></p>
            <p className="text-accent text-xs lg:text-sm font-bold">
              COURSE CATEGORIES
            </p>
            <p className="w-7 h-1 bg-accent"></p>
          </div>
          <h1 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-primary">
            Popular Topics To Learn
          </h1>
        </div>
        <button className="btn btn-outline btn-accent hidden lg:block">
          Explore More
        </button>
      </div>
      {/* end of top section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-16 cursor-pointer">
        {data.map((da) => (
          <div
            key={da.id}
            className="w-full py-12 px-7 rounded-lg shadow-lg ring-1 ring-gray-200 flex items-center space-x-6 hover:bg-accent"
          >
            <p className="text-5xl">{da.icon}</p>
            <h4 className="text-primary font-bold text-2xl">{da.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
