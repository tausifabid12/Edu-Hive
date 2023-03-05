import React from 'react';
import { FaBook, FaClock, FaLongArrowAltRight } from 'react-icons/fa';

const Courses = () => {
  const data = [
    {
      id: 1,
      name: 'Competitive Strategy law for all students',
      tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
      studentCount: 240,
      lessons: 55,
      price: 25,
      image: '/assets/course-1.jpg',
    },
    {
      id: 2,
      name: 'Machine Learning A-Z: Hands-On Python and',
      tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
      studentCount: 240,
      lessons: 55,
      price: 25,
      image: '/assets/course-2.jpg',
    },
    {
      id: 3,
      name: 'Achieving Advanced in Insights with Big',
      tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
      studentCount: 240,
      lessons: 55,
      price: 25,
      image: '/assets/course-3.jpg',
    },
    {
      id: 4,
      name: 'Education is About Forming Faithful Disciples',
      tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
      studentCount: 240,
      lessons: 55,
      price: 25,
      image: '/assets/course-4.jpg',
    },
    {
      id: 5,
      name: 'Education Makes A Person A Responsible Citizen',
      tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
      studentCount: 240,
      lessons: 55,
      price: 25,
      image: '/assets/course-5.jpg',
    },
    {
      id: 6,
      name: 'Machine Learning A-Z: Hands-On Python and',
      tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
      studentCount: 240,
      lessons: 55,
      price: 25,
      image: '/assets/course-6.jpg',
    },
    // {
    //   id: 7,
    //   name: 'Building A Better World One Student At A Time',
    //   tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
    //   studentCount: 240,
    //   lessons: 55,
    //   price: 25,
    //   image: '/assets/course-7.jpg',
    // },
    // {
    //   id: 8,
    //   name: 'Competitive Strategy law for all students',
    //   tutor: { name: 'Alice McCoy', img: '/assets/tutor.jpg' },
    //   studentCount: 240,
    //   lessons: 55,
    //   price: 25,
    //   image: '/assets/course-2.jpg',
    // },
  ];
  return (
    <section
      //   style={{
      //     background: "url('/assets/home.jpg')",
      //   }}
      className="min-h-screen space-y-20 px-2 lg:px-14"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center justify-center lg:justify-start space-x-1">
            <p className="w-7 h-1 bg-accent"></p>
            <p className="text-accent text-xs lg:text-sm font-bold capitalize">
              Tutorials
            </p>
            <p className="w-7 h-1 bg-accent"></p>
          </div>
          <h1 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-primary">
            Top Rated Learning Tutorials
          </h1>
        </div>
        <button className="btn btn-outline btn-accent hidden lg:block">
          Explore More
        </button>
      </div>
      {/* end of top sec */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {data.map((d) => (
          <div key={d.id} className="w-full pb-4 bg-white shadow-lg rounded-md">
            <div>
              <img src={d.image} className="h-64 w-full rounded-t-md" alt="" />
            </div>
            <div className="Card-body px-5 space-y-4">
              <div className="flex items-center justify-between py-5">
                <div className="flex items-center space-x-3 text-gray-600">
                  <FaBook />
                  <p className="font-semibold">{d.lessons} Lessons</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <FaClock />
                  <p className="font-semibold">02:45:30 Hours</p>
                </div>
              </div>
              <h2 className="text-primary font-bold text-xl">{d.name}</h2>
              <div className="flex items-center ">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-gray-500 font-semibold ml-3">
                  (255 reviews)
                </p>
              </div>
              <div className="border-t-2 pt-4 ">
                <button className="btn btn-accent font-bold">
                  Price: {d.price} $
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-accent font-bold px-10 block mx-auto ">
        <div className="flex items-center space-x-2">
          <p> View More</p> <FaLongArrowAltRight size={23} />
        </div>
      </button>
    </section>
  );
};

export default Courses;
