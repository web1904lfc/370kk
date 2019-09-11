<template>
<div>
<!-- 引入页头 -->
<header09></header09>
<div class="progress-bar-striped_my_index">
<div class="container my-seaarch-px mb-5">
    <div class="row">
        <div  class="col-80 mt-3">
            <div class="bg-white border pt-2">
                <div class="mx-3">
                    <div class="test">
                        <ul>
                        <li><span>按语言</span></li>
                            <li><a class="sarch-font-bg" href="1">全部</a></li>
                            <li><a href="2">国语</a></li>
                            <li><a href="3">粤语</a></li>
                            <li><a href="4">英语</a></li>
                            <li><a href="5">韩语</a></li>
                            <li><a href="6">日语</a></li>
                            <li><a href="6">法语</a></li>
                            <li><a href="6">其他</a></li>
                    </ul> 
                    <ul>
                        <li><span>按分类</span></li>
                        <li><a class="sarch-font-bg" href="2">全部</a></li>
                        <li><a href="3">动作</a></li>
                        <li><a href="4">喜剧</a></li>
                        <li><a href="5">爱情</a></li>
                        <li><a href="6">科幻</a></li>
                        <li><a href="2">灾难</a></li>
                        <li><a href="3">恐怖</a></li>
                        <li><a href="4">悬疑</a></li>
                        <li><a href="5">奇幻</a></li>
                        <li><a href="6">战争</a></li>
                        <li><a href="2">犯罪</a></li>
                        <li><a href="3">惊悚</a></li>
                        <li><a href="4">动画</a></li>
                        <li><a href="5">伦理</a></li>
                        <li><a href="6">剧情</a></li>
                        <li><a href="6">冒险</a></li>
                        <li><a href="6">历史</a></li>
                        <li><a href="6">家庭</a></li>
                        <li><a href="6">歌舞</a></li>
                        <li><a href="6">传记</a></li>
                        <li><a href="6">音乐</a></li>
                        <li><a href="6">西部</a></li>
                        <li><a href="6">运动</a></li>
                        <li><a href="6">古装</a></li>
                        <li><a href="6">情色</a></li>
                        <li><a href="6">同性</a></li>
                        <li><a href="6">武侠</a></li>
                        <li><a href="6">短片</a></li>
                        <li><a href="6">黑色电影</a></li>
                        <li><a href="6">儿童</a></li>
                        <li><a href="6">舞台艺术</a></li>
                        <li><a href="6">纪录片</a></li>
                        <li><a href="6">鬼怪</a></li>
                        <li><a href="6">魔幻</a></li>
                        <li><a href="6">罪案</a></li>
                        <li><a href="6">灾难</a></li>
                        <li><a href="6">青春</a></li>
                        <li><a href="6">文艺</a></li>
                        <li><a href="6">励志</a></li>
                    </ul> 
                    <ul>
                        <li><span>按年代</span></li>
                        <li><a class="sarch-font-bg" href="2">全部</a></li>
                        <li><a href="3">2019</a></li>
                        <li><a href="3">2018</a></li>
                        <li><a href="3">2017</a></li>
                        <li><a href="3">2016</a></li>
                        <li><a href="3">2015</a></li>
                        <li><a href="3">2000-2014</a></li>
                        <li><a href="3">1900-1999</a></li>
                        <li><a href="3">1900以前</a></li>
                    </ul> 
                    <ul>
                        <li><span>按地区</span></li>
                        <li><a class="sarch-font-bg" href="2">全部</a></li>
                        <li><a href="2">大陆</a></li>
                        <li><a href="2">香港</a></li>
                        <li><a href="2">台湾</a></li>
                        <li><a href="2">美国</a></li>
                        <li><a href="2">法国</a></li>
                        <li><a href="2">英国</a></li>
                        <li><a href="2">日本</a></li>
                        <li><a href="2">韩国</a></li>
                        <li><a href="2">德国</a></li>
                        <li><a href="2">泰国</a></li>
                        <li><a href="2">印度</a></li>
                        <li><a href="2">意大利</a></li>
                        <li><a href="2">西班牙</a></li>
                        <li><a href="2">加拿大</a></li>
                        <li><a href="2">其他</a></li>
                    </ul> 
                    </div>
                </div>
            <div class="test1 bg-white pt-0">
                <ul class="pl-3 m-0" style="border-bottom:1px solid #eee">
                    <li><a href="#">最新</a></li>
                    <li><a href="#">热门</a></li>
                    <li><a href="#">好评</a></li>
                </ul>
            </div>

        <film1></film1>
        <div id="fenyet">
            <ul>
                <li class="active"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
                <li><a href="">下一页</a></li>
                <li><a href="">尾页</a></li>
            </ul>
        </div>
        </div>
        </div>
    <div class="col-20">
    <film2></film2>
    </div>
    </div>
</div>
<footer09></footer09>
</div>
</div>
</template>
<script>
// (1)引入最新电影组件
import Film1 from './Film1'
// (2)引入热门电影组件
import Film2 from './Film2'
// (3)引入页头子组件
import Header09 from './Header09'
// (4)引入页尾子组件
import Footer09 from './Footer09'
export default {
    components:{
        "film1":Film1,   //最新电影
        "film2":Film2,   //热门电影
        "header09":Header09,  //页头
        "footer09":Footer09   //页尾
    }
}
</script>
<style scoped>
/* 设置搜索列表的内外边距，隐藏ul的原点 */
.test{border-radius: 20px;}
.test ul{list-style:none;padding:10px 10px 0 0px;margin: 0%}
.test ul:nth-child(1)~ul{border-top:1px solid #eee}
.test>ul>li>span{color:#999999}
/* 设置搜索列表的li为行内块元素，内边距 */
.test li{display:inline-block;}
.test li>a{font-size:14px;color:#333;padding:3px 10px;line-height:35px}
.test li>span{font-size:14px}
.sarch-font-bg{background:#ff9900;border-radius:2px;color:#ededed!important}

/* 设置主要内容的div左右两边内边距 */
.my-seaarch-px{
    padding-top:20px;
}
.col-13>div>p{
    font-size:12px;
}
/* 设置背景颜色和背景图片 */
.progress-bar-striped_my_index {
    background:url(../../public/img/index/bg_icon.jpg);
    background-color:#ededed;
}
/* 设置热门电影中图片的固定宽高和内外边距清0 */
.my_header_sm_width{
    padding:0;
    margin:0;
    width:33px;
    height:51px;
}
/* 设置去点，变成行内块，内边距 */
.test1>ul>li{
    list-style:none;
    display:inline-block;
    padding: 0 18px 0 0;
}
/*  最新，热门，好评的字体颜色和行高*/
.test1>ul>li>a{
    color:#333;
    line-height:51px;
}
/* 最新，热门，好评的第一个字体颜色 */
.test1>ul>li:first-child>a{
    color:#ff9900;
}
/* 主要图片的宽高内外边距 */
.my_header_width{
    padding:0;
    margin:0;
    width:162px;
    height:244px;
}
/* 分页条的字体颜色 */
#fenyet>ul>li>a{
    color:#333
}
/* 分页条的基本样式 */
#fenyet>ul>li{
    background:#fff;
    width:40px;
    height: 31px;
    border:1px solid #eee;
    display:inline-block;
    margin:3px;
    border-radius:5px;
    line-height:30px;
}
/* 分页条默认背景颜色 */
#fenyet>ul>li.active{
    background:#ff9900;
}
/* 分页条的背景颜色 */
#fenyet>ul>li:hover{
    background:#ff9900;
}
/* 分页条的最后一个的宽高 */
#fenyet>ul>li:last-child{
    width:60px;
    height: 31px;
}
/* 分页条的下一页的宽高 */
#fenyet>ul>li:nth-last-child(2){
    width:70px;
    height: 31px;
}
/* 设置分页条 */
#fenyet{
    text-align: center;
}
@media (min-width:1200px) {
/* 设置左边最新电影的宽度为80% */
.col-80{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 81%;
    flex: 0 0 81%;
    max-width: 80%;
    border-radius: 2px;
}

/* 设置右边热门电影的宽度为20% */
.col-20{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 19%;
    flex: 0 0 19%;
    max-width: 19%;
}
.col-13{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
}
}
@media (max-width:1199px) and (min-width:992px) {
    .col-20{
        display:none;
    }
    .col-13{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
}
@media (max-width:991px) and (min-width:768px) {
    .col-20{
        display:none;
    }
    .col-13{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }

}
@media (max-width:767px) and (min-width:576px) {
    .col-20{
        display:none;
    }
    .col-13{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33%;
        flex: 0 0 33%;
        max-width: 33%;
    }

}
@media (max-width:575px) {
    .col-20{
        display:none;
    }
    .col-13{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33%;
        flex: 0 0 33%;
        max-width: 33%;
    }

}
</style>