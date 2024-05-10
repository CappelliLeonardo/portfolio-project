<script>
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

export default {
    data() {
        return {

        };
    },
    methods: {

    },
    mounted(){

        gsap.registerPlugin(TextPlugin);
        gsap.set('nav', {xPercent: -50, yPercent:-50, autoAlpha:1})
        var menu = gsap.timeline({paused:true, reversed: true})
        .from("nav", {xPercent:0, width: 0, duration:1, ease:'power2.inOut'})
        .from("nav button",{autoAlpha:0, x:-25, duration:0.2, stagger:0.1})
        .to(".homeGsp", {text: "Home", duration:0.5, ease: "none"})
        .to(".aboutGsp", {text: "About", duration:0.5, ease: "none"})
        .to(".contactGsp", {text: "Contact", duration:0.5, ease: "none"})
        .to(".projectGsp", {text: "Projects", duration:0.5, ease: "none"})



        //.to(".", {text: "Home", duration:2, ease: "none"});
        
        document.querySelector(".menuButton").addEventListener("click", toggleMenu);

        function toggleMenu() {
        menu.reversed() ? menu.timeScale(1).play() : menu.timeScale(2).reverse(); 
        }
        // just for testing !!!
        document.querySelector("nav").addEventListener("click", toggleMenu);
    },
}
</script>

<template>
        <header>
            <div class="container d-flex justify-content-between">
                <nav>
                    <div class="menuCol one">
                        <button>
                            <router-link :to="{name:'Home'}" class="router-link-style homeGsp">emoH</router-link>
                        </button>
                        <button>
                            <router-link :to="{name:'About'}" class="router-link-style aboutGsp" >tuobA</router-link>
                        </button>
                        <button>
                            <router-link :to="{name:'Contact'}" class="router-link-style contactGsp">tcatnoC</router-link>
                        </button>
                        <button>
                            <router-link :to="{name:'Projects'}" class="router-link-style projectGsp" >stcejorP</router-link>
                        </button>
                        <button>
                            <i class="fa-solid fa-arrow-left router-link-style"></i>
                        </button>
                    </div>   
                </nav>
                <div>
                    Funzione che conta 
                </div>
                <div class="menuButton">
                    <div class="hamburger-menu m-4 ">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div> 
        </header>  
</template>


<style lang="scss" scoped>
.menuButton{
  //position:absolute;
  //top:10px;
  //left: calc(100% - 200px);
  font-family:sans-serif;
  font-size:24px;
  font-weight:600;
  cursor:pointer;
}
header{
    .container{
        nav{
            z-index: 9999;
        }
    }
}

nav {
  position: absolute;
  top:50%;
  left:50%;
  width:100%;
  height:100vh;
  background-color:rgb(86, 83, 88);
  visibility:hidden;
  overflow: hidden;
}
.menuCol{
  position:relative;
  margin: 40px 20px;
  float:left;

}
button{
  position:relative;
  background: transparent;
  border: none;
  font: 400 20px Arial;
  text-align: left;
  outline: none;
  width:100%;
  margin: 15px 0;
  padding: 0;
  cursor: pointer;
  visibility:hidden;
}
button:hover{
  font-weight:800;
}

.router-link-style{
    color:black;
    text-decoration: none;
    font-size: 4rem;
}

.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}
.bar {
  width: 100%;
  height: 4px;
  background-color: black;
}
// .hamburger-menu.active .bar:nth-child(1) {
//   transform: translateY(8px) rotate(45deg);
  
// }

// .hamburger-menu.active .bar:nth-child(2) {
//   opacity: 0;
// }

// .hamburger-menu.active .bar:nth-child(3) {
//   transform: translateY(-8px) rotate(-45deg);
// }
</style>
