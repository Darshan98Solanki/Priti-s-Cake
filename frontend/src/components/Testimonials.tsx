import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
            author: "Sheryl Berge",
            image: "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            text: "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
            author: "Leland Kiehn",
            image: "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            text: "The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone looking for quality gear.",
            author: "Peter Renolds",
            image: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    ];

    useEffect(() => {
        let interval: any | undefined;
        if (true) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 3500); // Change slide every 5 seconds
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-10 md:py-10 relative">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        What Our Customers Are Saying
                    </h2>
                </div>

                <div className="relative mt-16 lg:mt-20">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:block absolute top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-700" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all z-10"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-700" />
                    </button>

                    {/* Testimonial Card */}
                    <div className='flex  justify-center '>
                        <div className="mb-8 max-w-screen-md sm:break-inside-avoid">
                            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                <div className="flex items-center gap-4">
                                    <img alt="" src={testimonials[currentIndex].image} className="size-14 rounded-full object-cover" />
                                    <div>
                                        <div className="flex justify-center gap-0.5 text-green-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <p className="mt-0.5 text-lg font-medium text-gray-900">{testimonials[currentIndex].author}</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-700">
                                    {testimonials[currentIndex].text}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 md:mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-slate-900 w-4' : 'bg-slate-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
