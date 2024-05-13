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
                '/public/Img/bootstrap.svg',  
                '/public/Img/css3-alt.svg',
                '/public/Img/database-solid.svg',
                'public/Img/git-alt.svg',
                'public/Img/github-142-svgrepo-com.svg',
                'public/Img/html5.svg',
                'public/Img/js.svg',
                'public/Img/laravel.svg',
                'public/Img/mysql-svgrepo-com.svg',
                'public/Img/php.svg',
                'public/Img/sass.svg',
                'public/Img/vuejs.svg',
            ]
        }
    }
  };
</script>


<template>

    <footer>
        <div class="container">
            <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                    delay: 1500,
                    disableOnInteraction: false,
                }"
                :modules="modules"
                :slidesPerView="4"
                :initialSlide="4"
                effect="slide"
                :speed="3000"
                loop
                class="mySwiper">
                <swiper-slide v-for="(tech, i) in technologies" :key="i">
                    <div class="img-container">
                        <img :src="tech" alt="">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </footer>
    
  </template>

<style lang="scss" scoped>
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
.mySwiper{
    border:1px solid black
}
</style>
