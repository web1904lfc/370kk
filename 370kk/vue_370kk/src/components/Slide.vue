<template>
    <div class="container">
        <div class="bg-white border">
        <div class="carousel px-3 pt-3 pb-4" data-ride="carousel" id="demo">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="http://www.370kk.com/movie/30390">
                        <img class="w-100" src="img/index/fczlm4.jpg" alt=""/>
                    </a> 
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/index/ql.jpg" alt=""/>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/index/xblzcq.jpg" alt=""/>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/index/zy.jpg" alt=""/>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/index/jqdz.jpg" alt=""/>
                </div>
            </div>
            <!--左右箭头-->
            <a class="carousel-control-prev ml-3" data-slide="prev" href="#demo">
                <p class="carousel-control-prev-icon mt-3"></p>
            </a>
            <a class="carousel-control-next mr-3" data-slide="next" href="#demo">
                <p class="carousel-control-next-icon mt-3"></p>
            </a>
            <ul class="carousel-indicators p-0">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
            </ul>
        </div>
    </div>
    </div>
</template>
<style scoped>
.container{
    margin:0 auto;
    padding:0
}

/* 轮播图左右箭头 */
.carousel-control-prev,.carousel-control-next{
    width:4%;height:20%;
    top:40%;
    background-color:rgba(0,0,0,.3);
    border-radius:0.25rem;
}
/* 设置背景颜色和背景图片 */
.progress-bar-striped_my_index {
    background:url(../../public/img/index/bg_icon.jpg);
    background-color:#ededed;
}

/* .progress-bar.bg-white{
    box-sizing:border-box;
} */
/* 设置轮播图四个点的宽高和颜色 */
.carousel-indicators li{
    background:#efa2a9;
    width:1.2rem;
    height:0.3rem;
    
}
/* 设置轮播图四个点的下外边距 */
.carousel-indicators{
    margin-bottom: 1px !important;
}
/* 设置轮播图四个点的左边第一个为默认颜色 */
.carousel-indicators .active {
    background-color:#ff0000;
}
.icon-more:before { content: "\e6a7"; }
</style>