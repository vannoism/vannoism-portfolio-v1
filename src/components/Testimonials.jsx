import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Rain",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 2,
            name: "John Doe",
            rating: 4,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 3,
            name: "Amanda Rydsan",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 4,
            name: "Moza Nohara",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 5,
            name: "Rin Sydney",
            rating: 4,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        }
    ]

    return (
        <div id='testimonials' className='py-10 bg-black relative'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold text-orange-600'>What our Customers Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-orange-500 shadow-md shadow-orange-600 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex text-orange-500'>
                                        <Star fill="#EF4444" />
                                        <Star fill="#EF4444" />
                                        <Star fill="#EF4444" />
                                        <Star fill="#EF4444" />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex text-orange-500'>
                                        <Star fill="#EF4444" />
                                        <Star fill="#EF4444" />
                                        <Star fill="#EF4444" />
                                        <Star fill="#EF4444" />
                                        <Star fill="#EF4444" />
                                    </div>
                                )}
                                <p className='py-3 text-orange-200'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-orange-600 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1 text-orange-400'>Determinix</p>
                                    </div>
                                    <Quote className='text-orange-400' />
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
