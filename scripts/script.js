window.onload = function(){
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay:{
    //   delay:3000,
    //   disableOnInteraction: false,
    // },
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay:{
    //   delay:5000,
    //   disableOnInteraction: false,
    // },
  });
}
