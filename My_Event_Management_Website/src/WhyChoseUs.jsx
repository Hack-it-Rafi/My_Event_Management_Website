import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const WhyChoseUs = () => {
    return (
        <div  data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
            <div>
            <section className="max-w-7xl mx-auto mt-20 mb-10 px-5 py-2">
                <div className="text-center lg:text-center">
                    <h1 className="text-[#121212] text-5xl font-bold mb-4">
                        Why Choose Us
                    </h1>
                    <p className="text-[#12121299]">
                    Choosing our services is a decision driven by the unique value we offer. With years of experience and a deep understanding of the industry, our expertise is unrivaled. We prioritize customization, tailoring solutions to meet your specific needs, ensuring a perfect fit. Quality is our hallmark, and we never compromise. 
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto mb-20 px-5 py-2">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="flex justify-center">
                            <img src="https://learn.g2.com/hubfs/iStock-927805948.jpg" alt="" />
                        </div>
                    </div>
                    <div className=" flex-1 order-2 lg:order-1">
                        <div className="h-auto lg:h-[344px] flex flex-col justify-between gap-8">
                            <div className="flex flex-col lg:flex-row gap-3 text-center lg:text-left">
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center bg-[#1212121A] h-12 w-12 rounded-full">
                                        {/* <img className="w-7 mx-auto" src="./Icons/group.png" alt=""> */}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">Dedicated Team</h1>
                                    <div className="w-[70px] h-[2px] bg-slate-400 my-2 mx-auto lg:mx-0"></div>
                                    <p>
                                        Professional employees are there for you to pick the most amazing experience.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-3 text-center lg:text-left">
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center bg-[#1212121A] h-12 w-12 rounded-full">
                                        {/* <img className="w-7 mx-auto" src="./Icons/love.png" alt=""> */}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">To keep learning is Best</h1>
                                    <div className="w-[70px] h-[2px] bg-slate-400 my-2 mx-auto lg:mx-0"></div>
                                    <p>
                                        Professional employees are there for you to pick the most amazing and fresh fruits.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-3 text-center lg:text-left">
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center bg-[#1212121A] h-12 w-12 rounded-full">
                                        {/* <img className="w-7" src="./Icons/gift-box.png" alt=""> */}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">Gift Certificates</h1>
                                    <div className="w-[70px] h-[2px] bg-slate-400 my-2 mx-auto lg:mx-0"></div>
                                    <p>
                                        Professional employees are there for you to pick the most amazing and fresh fruits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 order-3 lg:order-3">
                        <div className="h-auto lg:h-[344px] flex flex-col justify-between gap-8">
                            <div className="flex flex-col lg:flex-row-reverse gap-3 text-center lg:text-right">
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center bg-[#1212121A] h-12 w-12 rounded-full">
                                        {/* <img className="w-7 mx-auto" src="./Icons/fruit.png" alt=""> */}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">Integrated Supplier</h1>
                                    <div className="w-[70px] h-[2px] bg-slate-400 my-2 mx-auto lg:mr-0"></div>
                                    <p>
                                        Professional employees are there for you to pick the most amazing and fresh fruits.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row-reverse gap-3 text-center lg:text-right">
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center bg-[#1212121A] h-12 w-12 rounded-full">
                                        {/* <img className="w-7 mx-auto" src="./Icons/ice-cream.png" alt=""> */}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">Sustainable Practice</h1>
                                    <div className="w-[70px] h-[2px] bg-slate-400 my-2 mx-auto lg:mr-0"></div>
                                    <p>
                                        Professional employees are there for you to pick the most amazing and fresh fruits.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row-reverse gap-3 text-center lg:text-right">
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center bg-[#1212121A] h-12 w-12 rounded-full">
                                        {/* <img className="w-7" src="./Icons/like.png" alt=""> */}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold">The Benefits Only</h1>
                                    <div className="w-[70px] h-[2px] bg-slate-400 my-2 mx-auto lg:mr-0"></div>
                                    <p>
                                        Professional employees are there for you to pick the most amazing and fresh fruits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default WhyChoseUs;