<!-- <script>
export default {
    data() {
        return {
            modules: [Autoplay],
        };
    },
    methods: {

    },
    mounted(){
        //Inizializzazione di swiper 
        const swiper = new Swiper('.swiper-container',{
            slidesPerView: 5, // quantità di slide visibili 
            spaceBetween: 20, // spazio fra slides
            modules: [Navigation, Pagination],
            loop: true,
            Autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
       
    },
    
}
</script> -->
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';


  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
    data(){
        return{
            technologies:[
                '/Img/bootstrap.svg',  
                '/Img/css3-alt.svg',
                '/Img/database-solid.svg',
                '/Img/git-alt.svg',
                '/Img/github-142-svgrepo-com.svg',
                '/Img/html5.svg',
                '/Img/js.svg',
                '/Img/laravel.svg',
                '/Img/mysql-svgrepo-com.svg',
                '/Img/php.svg',
                '/Img/sass.svg',
                '/Img/vuejs.svg',
            ]
        }
    }
  };
</script>


<template>

    <footer>
            <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                    delay: 1500,
                    disableOnInteraction: false,
                }"
                :modules="modules"
                :slidesPerView="5"
                :initialSlide="4"
                effect="slide"
                :speed="2000"
                loop
                class="mySwiper">
                <swiper-slide v-for="(tech, i) in technologies" :key="i" class="d-flex justify-content-center ">
                    <div class="img-container">
                        <img :src="tech" alt="">
                    </div>
                </swiper-slide>
            </swiper>
            <div class="container footer-bottom d-flex justify-content-center align-items-center">
                <p class="m-0">
                    © Leonardo Cappelli 2024 // Made with <i class="fa-solid fa-heart"></i>
                </p>
            </div>
    </footer>
    
  </template>

<style lang="scss"scoped>
.img-container{
    width: 75px;
    height:75px;
    img{
        object-fit:contain;
        object-position: center;
        width:100%;
        height:100%;
    }
}
.footer-bottom {
    height: 50px;
}




</style>
