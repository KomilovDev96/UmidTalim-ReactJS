import React from 'react'
import "./style.scss"
import { useTranslation } from 'react-i18next';
import LazyImage from '../../components/customs/ImagesCustoms';
import { EngPng, TeacherJPG } from '../../assets';
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";


export default function HomePage() {
    const { t } = useTranslation()
    return (
        <>
            <section className='aboutUs'>
                <div className='container mt-8'>
                    <div className='xl mx-auto mb-8'>
                        <h2 className='font-bold text-3xl'>{t("Bizning afzalliklarimiz")}</h2>
                    </div>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='md:flex flex-wrap'>
                                <div className='basis-1/2'>
                                    <LazyImage src={TeacherJPG} className="brightness-100 saturate-200 rounded-lg" />
                                </div>
                                <div className='py-2 pl-8 basis-1/2'>
                                    <h3 className='font-bold text-start text-2xl mb-5'>O'z ishinging mutahasilari</h3>
                                    <p className='whitespace-normal'>
                                        Darslar katta tajribaga ega malakali mutaxassislar tomonidan o'tiladi. Shu bois siz sifatli ta'limga ega bo'lasiz
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:flex flex-wrap'>
                                <div className='basis-1/2'>
                                    <LazyImage src={TeacherJPG} className="brightness-100 saturate-200 rounded-lg" />
                                </div>
                                <div className='py-2 pl-8 basis-1/2'>
                                    <h3 className='font-bold text-start text-2xl mb-5'>O'z ishinging mutahasilari</h3>
                                    <p className='whitespace-normal'>
                                        Darslar katta tajribaga ega malakali mutaxassislar tomonidan o'tiladi. Shu bois siz sifatli ta'limga ega bo'lasiz
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:flex flex-wrap'>
                                <div className='basis-1/2'>
                                    <LazyImage src={TeacherJPG} className="brightness-100 saturate-200 rounded-lg" />
                                </div>
                                <div className='py-2 pl-8 basis-1/2'>
                                    <h3 className='font-bold text-start text-2xl mb-5'>O'z ishinging mutahasilari</h3>
                                    <p className='whitespace-normal'>
                                        Darslar katta tajribaga ega malakali mutaxassislar tomonidan o'tiladi. Shu bois siz sifatli ta'limga ega bo'lasiz
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className='kurs mb-8 mt-8'>
                <div className='xl mx-auto mb-8'>
                    <h2 className='font-bold text-3xl'>{t("Yo‘nalishlar bo‘yicha kurslarimiz")}</h2>
                </div>
                <div className='kurs__block'>
                    <div className='kurs__item pt-8 pb-8 pl-5 pr-5 bg-white'>
                        <div className='kurs__item-img'>
                            <LazyImage src={EngPng} alt="png" />
                        </div>
                        <div className='kurs__item-text ml-3'>
                            <h3 className='font-bold text-2xl mb-3'>Inglis tili</h3>
                            <p className='text-base leading-7'>Ingliz tilini yaxshi gapirishni o’rganish hayotingizni o’rgartirish yuborishi mumkin chunki Ingliz tili “imkoniyatlar tili” deb ataladi. Bugundan boshlab inglis tilini biz bilan birga o'rganing</p>
                            <button class="btn-8"><span>Kursga yozdirish</span></button>
                        </div>
                    </div>
                    <div className='kurs__item pt-8 pb-8 pl-5 pr-5 bg-white'>
                        <div className='kurs__item-img'>
                            <LazyImage src={EngPng} alt="png" />
                        </div>
                        <div className='kurs__item-text ml-3'>
                            <h3 className='font-bold text-2xl mb-3'>Inglis tili</h3>
                            <p className='text-base leading-7'>Ingliz tilini yaxshi gapirishni o’rganish hayotingizni o’rgartirish yuborishi mumkin chunki Ingliz tili “imkoniyatlar tili” deb ataladi. Bugundan boshlab inglis tilini biz bilan birga o'rganing</p>
                            <button className=''>Kursga yozdirish</button>
                        </div>
                    </div>
                    <div className='kurs__item pt-8 pb-8 pl-5 pr-5 bg-white'>
                        <div className='kurs__item-img'>
                            <LazyImage src={EngPng} alt="png" />
                        </div>
                        <div className='kurs__item-text ml-3'>
                            <h3 className='font-bold text-2xl mb-3'>Inglis tili</h3>
                            <p className='text-base leading-7'>Ingliz tilini yaxshi gapirishni o’rganish hayotingizni o’rgartirish yuborishi mumkin chunki Ingliz tili “imkoniyatlar tili” deb ataladi. Bugundan boshlab inglis tilini biz bilan birga o'rganing</p>
                            <button className=''>Kursga yozdirish</button>
                        </div>
                    </div>
                    <div className='kurs__item pt-8 pb-8 pl-5 pr-5 bg-white'>
                        <div className='kurs__item-img'>
                            <LazyImage src={EngPng} alt="png" />
                        </div>
                        <div className='kurs__item-text ml-3'>
                            <h3 className='font-bold text-2xl mb-3'>Inglis tili</h3>
                            <p className='text-base leading-7'>Ingliz tilini yaxshi gapirishni o’rganish hayotingizni o’rgartirish yuborishi mumkin chunki Ingliz tili “imkoniyatlar tili” deb ataladi. Bugundan boshlab inglis tilini biz bilan birga o'rganing</p>
                            <button className=''>Kursga yozdirish</button>
                        </div>
                    </div>
                    <div className='kurs__item pt-8 pb-8 pl-5 pr-5 bg-white'>
                        <div className='kurs__item-img'>
                            <LazyImage src={EngPng} alt="png" />
                        </div>
                        <div className='kurs__item-text ml-3'>
                            <h3 className='font-bold text-2xl mb-3'>Inglis tili</h3>
                            <p className='text-base leading-7'>Ingliz tilini yaxshi gapirishni o’rganish hayotingizni o’rgartirish yuborishi mumkin chunki Ingliz tili “imkoniyatlar tili” deb ataladi. Bugundan boshlab inglis tilini biz bilan birga o'rganing</p>
                            <button className=''>Kursga yozdirish</button>
                        </div>
                    </div>
                    <div className='kurs__item pt-8 pb-8 pl-5 pr-5 bg-white'>
                        <div className='kurs__item-img'>
                            <LazyImage src={EngPng} alt="png" />
                        </div>
                        <div className='kurs__item-text ml-3'>
                            <h3 className='font-bold text-2xl mb-3'>Inglis tili</h3>
                            <p className='text-base leading-7'>Ingliz tilini yaxshi gapirishni o’rganish hayotingizni o’rgartirish yuborishi mumkin chunki Ingliz tili “imkoniyatlar tili” deb ataladi. Bugundan boshlab inglis tilini biz bilan birga o'rganing</p>
                            <button className=''>Kursga yozdirish</button>
                        </div>
                    </div>
                    <div className='kurs__item pt-8 pb-8 pl-5 pr-5 bg-white'>
                        <div className='kurs__item-img'>
                            <LazyImage src={EngPng} alt="png" />
                        </div>
                        <div className='kurs__item-text ml-3'>
                            <h3 className='font-bold text-2xl mb-3'>Inglis tili</h3>
                            <p className='text-base leading-7'>Ingliz tilini yaxshi gapirishni o’rganish hayotingizni o’rgartirish yuborishi mumkin chunki Ingliz tili “imkoniyatlar tili” deb ataladi. Bugundan boshlab inglis tilini biz bilan birga o'rganing</p>
                            <button className=''>Kursga yozdirish</button>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
