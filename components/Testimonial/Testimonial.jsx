import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  return (
    <section className=" relative py-20 ">
      <div className="flex items-center justify-between ">
        <div className="px-3 lg:px-14">
          <div className="flex items-center space-x-1">
            <p className="w-7 h-1 bg-accent"></p>
            <p className="text-accent font-bold capitalize">Testimonial</p>
            <p className="w-7 h-1 bg-accent"></p>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">
            What Our Customers <br /> Are Saying
          </h1>
        </div>
      </div>
      <div className="mt-10 lg:mt-28 px-3 lg:px-0 lg:pl-14 pb-14">
        <Swiper
          spaceBetween={40}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div class="w-full p-8 bg-white rounded-md shadow-lg font-semibold">
              <p class="leading-loose text-primary  ">
                “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
                accusantium beatae tempore quasi nesciunt distinctio. ”
              </p>

              <div class="flex items-center mt-6 -mx-2">
                <img
                  class="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                  alt=""
                />

                <div class="mx-2">
                  <h1 class=" text-gray-800 font-bold ">Jeny Doe</h1>
                  <span class="text-sm text-accent font-semibold ">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="w-full p-8 bg-white rounded-md shadow-lg font-semibold">
              <p class="leading-loose text-primary  ">
                “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
                accusantium beatae tempore quasi nesciunt distinctio. ”
              </p>

              <div class="flex items-center mt-6 -mx-2">
                <img
                  class="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                  alt=""
                />

                <div class="mx-2">
                  <h1 class=" text-gray-800 font-bold ">Jeny Doe</h1>
                  <span class="text-sm text-accent font-semibold ">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="w-full p-8 bg-white rounded-md shadow-lg font-semibold">
              <p class="leading-loose text-primary  ">
                “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
                accusantium beatae tempore quasi nesciunt distinctio. ”
              </p>

              <div class="flex items-center mt-6 -mx-2">
                <img
                  class="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                  alt=""
                />

                <div class="mx-2">
                  <h1 class=" text-gray-800 font-bold ">Jeny Doe</h1>
                  <span class="text-sm text-accent font-semibold ">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="w-full p-8 bg-white rounded-md shadow-lg font-semibold">
              <p class="leading-loose text-primary  ">
                “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
                accusantium beatae tempore quasi nesciunt distinctio. ”
              </p>

              <div class="flex items-center mt-6 -mx-2">
                <img
                  class="object-cover mx-2 rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                  alt=""
                />

                <div class="mx-2">
                  <h1 class=" text-gray-800 font-bold ">Jeny Doe</h1>
                  <span class="text-sm text-accent font-semibold ">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-accent h-full w-96 absolute -z-10 top-0 right-0"></div>
    </section>
  );
};

export default Testimonial;
