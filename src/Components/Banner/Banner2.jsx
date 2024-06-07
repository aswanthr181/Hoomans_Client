import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Banner2({ data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: dots => (
            <div className=" absolute bottom-4 right-4 w-40 overflow-x-auto scrollbar-hide">
                <ul className=' hidden  space-x-2'> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full cursor-pointer"></div>
        )
    };
    const fallbackImage = "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk="

    return (
        <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  '>
                <div className='max-w-[1640px] mx-auto bg-slate-100  rounded-2xl'>
                    <Slider {...settings} className=''>
                        {data.map((item, index) => (
                            <div className='max-h-[500px] max-w-[1243px] relative '>
                                {/* Overlay */}
                                <div className='absolute ml-10 w-[404px] h-full text-gray-200 max-h-[500px]  flex flex-col justify-center'>
                                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4'>
                                        {item.title}
                                    </h2>
                                    <p className='text-lg mt-2'>
                                    {item?.title}," now zipping into the theater-verse, is the long-awaited follow-up to {item.year}'s "{item?.title}," a revelatory thrill ride that deservedly won the Oscar for animation.
                                    </p>
                                    <button className='mt-4 px-6 py-3 w-52 bg-white  text-lg font-semibold rounded-md flex gap-[8px]'>
                                        <div className=' bg-custom-pink  w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                                            <FaPlay />
                                        </div>
                                        <div>
                                            <span className='text-black'>Watch Trailer</span>
                                        </div>
                                    </button>
                                </div>


                                <div key={index} className="overflow-hidden rounded-2xl ">
                                    <img className='w-full max-h-[500px] object-cover '
                                        src={item.banner_image || fallbackImage}
                                        alt="banner image"
                                        onError={(e) => e.target.src = fallbackImage} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Banner2