import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./style.css"
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='z-[2]'>
            <div className="max-w-7xl mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/tLJKFQT/8477de.webp)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">INNOVATIVE</h1>
                                <p className="mb-5 text-white">We thrive on producing creative solutions to every obstacle.</p>

                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/SwTTfKQ/8477de-59ed4f25e84e43788fd7009eaf1a6eca-mv2-d-7360-4912-s-4-2.webp)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">EXPERIENCED</h1>
                                <p className="mb-5 text-white">We have mastered the art of listening & producing your vision.</p>

                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/JFgLkpH/8477de-5814ec78df644b18925b09458540353d-mv2-d-7360-4912-s-4-2.webp)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">PASSIONATE</h1>
                                <p className="mb-5 text-white">We are dedicated to exceeding your expectations.</p>

                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;