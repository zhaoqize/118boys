<template>
  <div id="wrapper">
    <nav class="navbar navbar-default  bg" role="navigation">
      <div class="container-fluid">
      <div class="container" >
         <!-- <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>  -->
        <ul class="nav navbar-nav">
          <li><a v-link="'/home'">首页</a></li>
          <li><a v-link="'/fourYears'">我们的四年</a></li>
          <li><a v-link="'/wds'">松</a></li>
          <li><a v-link="'/zgl'">大彪子</a></li>
          <li><a v-link="'/wd'">迪迪</a></li>
          <li><a v-link="'/zqz'">刺血</a></li>
          <li><a v-link="'/gjw'">小葛</a></li>
          <li><a v-link="'/ww'">大伟</a></li>
        </ul>
      </div>
    </nav>
    <div class="container ">
      <!-- <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div> -->
      <div class="col-sm-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: { Sidebar },
    ready() {
        // this.$http.get('http://localhost:8888/time')
        //   .then(function(ret) {
        //     this.totalTime = ret.data.time;
        //   })
        //   .then(function(err) {
        //     console.log(err);
        //   })
    },
    data () {
      return {
        totalTime: 0
      }
    },
    events: {
      timeUpdate (timeEntry) {
        console.log(timeEntry);
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }
</script>
<style>

  .carousel-top{
    top: 70px;
    position: relative;
  }

  .bg{
    background-image: url(./assets/topbg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-width:0 !important;
    border-radius: 0 !important;
  }

</style>
