<template>
  <!-- <div class="jumbotron">
    <h1>任务追踪</h1>
    <p>
      <strong>
        <a v-link="'/time-entries'">创建一个任务</a>.
      </strong>
    </p>
  </div> -->
  <div class="carousel">
    <carousel></carousel>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'

export default {
  components:{
    Carousel
  }
}

  // export default {
  //   data () {
  //     return {}
  //   }
  // }
</script>

<style>

.carousel{
  
}

</style>
