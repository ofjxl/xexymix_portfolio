const main_s = new Swiper('.main1-slide',{
    loop:true,
    autoplay: {delay:2500},
})
const main6_s = new Swiper('.main6-slide',{
    slidesPerView:3,
    spaceBetween:22,
    navigation:{
        nextEl: ".main6-slide .swiper-button-next",
        prevEl: ".main6-slide .swiper-button-prev",
    },
})