<template>
	<div id="myCarousel" class="carousel slide">
		<!-- 轮播（Carousel）指标 -->
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1"></li>
			<li data-target="#myCarousel" data-slide-to="2"></li>
			<li data-target="#myCarousel" data-slide-to="3"></li>
			<li data-target="#myCarousel" data-slide-to="4"></li>
			<li data-target="#myCarousel" data-slide-to="5"></li>
			<li data-target="#myCarousel" data-slide-to="6"></li>
			<li data-target="#myCarousel" data-slide-to="7"></li>
			<li data-target="#myCarousel" data-slide-to="8"></li>
			<li data-target="#myCarousel" data-slide-to="9"></li>
		</ol>   
		<!-- 轮播（Carousel）项目 -->
		<div class="carousel-inner">
			<div class="item active center">
				<img src="../assets/images/psu(1).jpg" alt="First slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(2).jpg" alt="Second slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(3).jpg" alt="Third slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(4).jpg" alt="Third slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(5).jpg" alt="Third slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(6).jpg" alt="Third slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(7).jpg" alt="Third slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(8).jpg" alt="Third slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(9).jpg" alt="Third slide">
			</div>
			<div class="item center">
				<img src="../assets/images/psu(10).jpg" alt="Third slide">
			</div>
		</div>
		<!-- 轮播（Carousel）导航 -->
		<!-- Controls -->
		<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		    <span class="glyphicon glyphicon-chevron-left"></span>
		    <span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		    <span class="glyphicon glyphicon-chevron-right"></span>
		    <span class="sr-only">Next</span>
		</a>
	</div>
</template>

<style>
	.center{
		text-align: -webkit-center;
	}
</style>