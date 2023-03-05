import React from 'react';

const JoinWorkShop = () => {
  return (
    <section
      style={{
        background: "url('/assets/workShop.png')",
      }}
      className=" relative "
    >
      <div className="w-full h-full bg-accent absolute -z-10"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white h-full py-24 px-12">
        <div className="h-full w-full ">
          <div className="flex flex-col justify-center space-y-8 h-full  lg:px-10 ">
            <p className=" font-semibold text-sm lg:text-md">FREE WORKSHOP</p>
            <h1 className=" font-bold text-3xl  lg:text-5xl">
              Join Our Free Workshops
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              aut perspiciatis quibusdam provident necessitatibus, corrupti, ex
              ipsam aliquam explicabo est molestiae rem expedita quam nihil
              totam, nobis architecto iusto at.
            </p>
            <button className="btn bg-white hidden lg:block w-60 border-none text-primary font-semibold rounded-md">
              More Upcoming WorkShop
            </button>
          </div>
        </div>
        {/* end of one sec */}
        <div className="lg:px-8 hidden lg:block">
          <img src="/assets/course-7.jpg" className="rounded-lg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default JoinWorkShop;
