export default function initSlider() {
    const servicesGallery = document.querySelectorAll('.services_gallery_swiper') || null;
    servicesGallery.forEach((newSwiper) => {
        if (newSwiper) {
            const sliderGallery = new Swiper(newSwiper, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: '.services_gallery_swiper .swiper-button-next',
                    prevEl: '.services_gallery_swiper .swiper-button-prev',
                },
                pagination: {
                    el: ".services_gallery_swiper .swiper-pagination",
                    dynamicBullets: true,
                },
                breakpoints: {
                    648: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1366: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }
            });
        }
    })
    
    const sliderSwiper = document.querySelector('.our-team_swiper') || null;
    if (sliderSwiper) {
        const slider = new Swiper(sliderSwiper, {
            slidesPerView: 1,
            spaceBetween: 15,
            loop: true,
            navigation: {
                nextEl: '.our-team_swiper .swiper-button-next',
                prevEl: '.our-team_swiper .swiper-button-prev',
            },
            pagination: {
                el: ".our-team_swiper .swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                648: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        });
    }

    const sliderReviews = document.querySelector('.reviews-slider') || null;
    if (sliderReviews) {
        const slider = new Swiper(sliderReviews, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.reviews-slider .swiper-button-next',
                prevEl: '.reviews-slider .swiper-button-prev',
            },
            pagination: {
                el: ".reviews-slider .swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                648: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1366: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                }
            }
        });
    }

    const mySwiper = document.querySelector('.mySwiper') || null;
    const mySwiper2 = document.querySelector('.mySwiper2') || null;
    if (mySwiper || mySwiper2) {
        const swiper = new Swiper(".mySwiper", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        const swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            thumbs: {
                swiper: swiper
            },
        });
    }


    const currentOffers = document.querySelector('.current_offesr-slider') || null;
    if (currentOffers) {
        const slider = new Swiper(currentOffers, {
            slidesPerView: "auto",
            spaceBetween: 15,
            loop: true,
            navigation: {
                nextEl: '.current_offesr-slider .swiper-button-next',
                prevEl: '.current_offesr-slider .swiper-button-prev',
            },
            pagination: {
                el: ".current_offesr-slider .swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                648: {
                    spaceBetween: 20,
                },
                1366: {
                    spaceBetween: 25,
                }
            }
        });
    }    
};
