import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        background: "url('/assets/home.jpg')",
      }}
      className="lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:pt-10 pt-12 px-3 "
    >
      <div className="flex flex-col  justify-center lg:px-10 space-y-10">
        <div>
          <p className="font-semibold text-accent capitalize pb-4">
            BETTER LEARNING FUTURE WITH US
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold text-primary">
            Education Is About Academic Excellence
          </h1>
        </div>
        <p className="text-gray-500 text-sm lg:text-lg font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ipsum?
          Fugiat facilis labore fugit illum impedit cum sapiente nihil ut id
          molestias corporis. molestias corporis.
        </p>
        <div className="form-control lg:pr-28">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered w-full"
            />
            <button className="btn btn-accent">Subscribe</button>
          </div>
        </div>
        <p className="text-gray-500 font-semibold hidden lg:block">
          No credit card required. By clicking{' '}
          <span className="text-accent">‘Start a Free Trial’</span>
        </p>
        {/* <button className="btn btn-accent text-white w-44">
          Let's Get Started
        </button> */}
      </div>
      {/* ----------------------- */}

      <div className="flex items-center justify-center pt-10 lg:pt-0">
        <img src="/assets/image-01.png" className="w-4/5" alt="" />
      </div>
    </section>
  );
};

export default Hero;
