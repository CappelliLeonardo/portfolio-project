<script>
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    mounted(){
        // Inizializzazione di swiper 
        const swiper = new Swiper('.swiper-container',{
            modules: [Navigation, Pagination],
        });
    },
    
}
</script>

<template>
    <footer>
        <div class="container">
           <div class="swiper-container">
               <div class="swiper-wrapper">
                   <div class="swiper-slide">Contenuto 1</div>
                   <div class="swiper-slide">Contenuto 2</div>
               </div>
               
               <div class="swiper-button-next"></div>
               <div class="swiper-button-prev"></div>
               <div class="swiper-pagination"></div>
           </div>
        </div> 
    </footer>
</template>

<style lang="scss" scoped>

</style>
