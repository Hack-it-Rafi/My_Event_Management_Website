import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./style.css"
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mt-20'>
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
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/8477de_ce10966ea208471ead6a95dc2f33795c~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_1899,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8477de_ce10966ea208471ead6a95dc2f33795c~mv2_d_7360_4912_s_4_2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">INNOVATIVE</h1>
                                <p className="mb-5 text-white">We thrive on producing creative solutions to every obstacle.</p>

                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/8477de_59ed4f25e84e43788fd7009eaf1a6eca~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_1225,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8477de_59ed4f25e84e43788fd7009eaf1a6eca~mv2_d_7360_4912_s_4_2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">EXPERIENCED</h1>
                                <p className="mb-5 text-white">We have mastered the art of listening & producing your vision.</p>

                            </div>
                        </div>
                    </div></SwiperSlide>                   
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: 'url(https://static.wixstatic.com/media/8477de_5814ec78df644b18925b09458540353d~mv2_d_7360_4912_s_4_2.jpg/v1/fill/w_1899,h_696,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/8477de_5814ec78df644b18925b09458540353d~mv2_d_7360_4912_s_4_2.jpg)' }}>
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