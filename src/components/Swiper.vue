<template>
    <div class="swiper">
        <slider-show :imgs="imgs" :interval="interval"></slider-show>
    </div>
</template>
<script>
import sliderShow from "@shaoyongtao/vueslider";
export default {
    components:{
        sliderShow
    },
    data(){
        return{
            imgs:[
                require("../assets/1.jpg"),
                require("../assets/2.jpg"),
                require("../assets/3.jpg")
            ],
             interval:7
        }
    },
}
</script>

