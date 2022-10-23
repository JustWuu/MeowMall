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

  var swiper3 = new Swiper(".mySwiper3", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  const load_scene = document.querySelector('.load-scene');
  Load = setTimeout(() => load_scene.style.display = "none", 3000)
  
}