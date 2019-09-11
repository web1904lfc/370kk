<template>
<div>
    <!-- 页头组件 -->
<header09></header09>
<div class="progress-bar-striped_my_index">
<div class="row my-seaarch-px">
    <div  class="col-80">
            <!--详情页  -->
        <div class="bg-white border clearfix mt-3">
            <!-- 图片 -->
            <div class="float-left m-2">
                <img style="width:190px;height:285px" src="img/details/01.jpg" alt="">
            </div>
            <!-- 内容 -->
            <div class="float-left px-4 pt-4" style="width:78%;height:100%">
                <h1>叶问2：宗师传奇</h1>
                <p class=""><span>主演：</span> 甄子丹\洪金宝\郑则仕\任达华\黄晓明\樊少皇\ 敖嘉年\熊黛林\杜宇航\释小龙\陆梅芳\达伦·萨赫拉维\郑家星</p>
                <p>导演： 叶伟信</p>
                <p>类型：动作/历史/传记  地区： 大陆  年份：2010</p>
                <p><span>时间：</span>2019-08-10 07:15:08</p>
                <p>
                    <span>评分：</span>
                    <span><img src="img/index/star_min.png" alt=""></span>7.2分
                </p>
                <p>
                    <span>简介： </span>
                    <span>叶问（甄子丹 饰）携家眷来到香港，艰难度日。叶问开武馆宣扬咏春拳术，但无人问津。某日，黄梁（黄晓明 饰）登门拜访，比武之后，甘愿携一班兄弟，拜在叶问门下
                        <span id="sl"></span>
                    </span>
                    <span class="disp" id="xq1">黄梁因故与洪拳门下斗殴，结果被捉。叶问来救，却巧遇昔日对手金山找（樊少皇 饰），两人冰释前嫌，却不想被洪拳掌门洪震南（洪金宝 饰）拦下，以致众人被警察（郑则仕 饰）拘捕。洪震南提醒叶问，欲在香港开武馆，必须接受各大门派挑战。于是叶问单刀赴会，最终与洪震南对决，不分伯仲，叶问因拒绝缴纳会费，而遭到洪门寻衅滋事，以致武馆被关。背地里，洪震南替英国警察操持华洋比赛，但始终未有报酬，深感不平。拳击冠军龙卷风来到中国，在比赛现场中侮辱中国武术，打伤中国拳师。洪震南挺身而住，血溅现场。为了中国武术的荣誉，叶问接受了龙卷风的挑衅，为民族大义而战。
                    </span><a id="xq"></a>
                </p>
                <a class="btn btn-warning ml-5" style="color:#fff" href="index.html">立即播放</a>
            </div>
        </div>
<!-- 云播 -->
        <div class="bg-white border mt-4 yunbo px3">
            <div class="border-bottom">
                <ul>
                    <li>云播</li>
                    <li>在线播放,无需安装播放器</li>
                </ul>
            </div>
            <div class="my-4">
                <a class="border px-3 py-1" href="">
                    BD1280高清国语中字版
                </a>
            </div>
        </div>
<!-- 下载 -->
        <div class="bg-white border my-4 xzai px-3">
            <div class="border-bottom py-3">
                <ul class="">
                    <li>平板MP4下载</li>
                    <li>在线播放,无需安装播放器</li>
                </ul>
            </div>
            <div class="my-4">
                <ul class="clearfix">
                    <li>叶问2：宗师传奇.BD1280高清国语中字版</li>
                    <li><input type="text" value="thunder://QUFodHRwJTNBJTJGJTJGYW5uaW5nLmx1YW5uaWFvLXp1aWRhLmNvbSUyRjE5MDglMkYlRTUlOEYlQjYlRTklOTclQUUyJUVGJUJDJTlBJUU1JUFFJTk3JUU1JUI4JTg4JUU0JUJDJUEwJUU1JUE1JTg3LkJEMTI4MCVFOSVBQiU5OCVFNiVCOCU4NSVFNSU5QiVCRCVFOCVBRiVBRCVFNCVCOCVBRCVFNSVBRCU5NyVFNyU4OSU4OC5tcDRaWg=="></li>
                    <li><button class="btn-sm btn-warning">直接下载</button></li>
                    <li><button class="btn-sm btn-info">迅雷下载</button></li>
                </ul>
            </div>
        </div>
        <div class="bg-white border mt-4 pt-2">
        <!-- 电影导航栏 -->
            <div class="test1 bg-white pt-0">
                <ul class="pl-3 m-0" style="border-bottom:1px solid #eee">
                    <li><img src="img/details/icon_6.png" alt=""></li>
                    <li><a href="#">猜你喜欢</a></li>
                </ul>
            </div>
    <film1></film1>
        </div>
    </div>
    <div class="col-20">
        <film2></film2>
        <film2></film2>
    </div>
    </div>
        <footer09></footer09>
    </div>
    </div>
</template>
<script>
// (1)引入一楼电影
import Film from './Film'
import Film1 from './Film1'
import Film2 from './Film2'
// (2)引入页头子组件
import Header09 from './Header09'
// (3)引入页尾子组件
import Footer09 from './Footer09'
export default {
    components:{
        "film":Film,  //一楼电影组件
        "film1":Film1,  //一楼电影组件
        "film2":Film2,  //一楼电影组件
        "header09":Header09,   // 注册页头子组件
        "footer09":Footer09,   // 注册页尾子组件
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
    padding:0 6%;
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
/*  猜你喜欢的字体颜色和行高*/
.test1>ul>li>a{
    color:#333;
    line-height:51px;
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
    -ms-flex: 0 0 16.66666%;
    flex: 0 0 16.66666%;
    max-width: 16.66666%;
}
.my_header_width{
    padding:0;
    margin:0;
    width:130px;
    height:195px;
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
/* 云播下ul的内外边距和设置弹性主轴方向两端对齐 */
.yunbo ul{
    margin:0;
    padding:.5rem;
    display:flex;
    justify-content:space-between
}
/* 云播下ul的li去点 */
.yunbo ul>li{
    list-style:none; 
}
/* 云播下的ul的li最后一个子元素字体大小和行高 */
.yunbo ul>li:last-child{
    font-size:14px;
    color: #999999;
    line-height: 30px
}
/* 云播下的a标签字体大小和颜色 */
.yunbo>div>a{
    color:#333;
    font-size:14px;
}
/* 云播下div的左内边距 */
.yunbo>div{
    padding-left:1rem
}
/* 下载下的ul的内外边距和设置弹性和主轴方向两端对齐 */
.xzai ul>li:first-child,.xzai ul>li:nth-child(2){
    float:left;
}
/* 下载下的ul下最后一个元素和第三个元素右边两个按钮右浮动 */
.xzai ul>li:last-child,.xzai ul>li:nth-child(3){
    float:right;
}
/* 下载下的中间input的大小 */
.xzai .clearfix>li:first-child{
    color:009900;
    font-size:14px;
    font-weight:700;
}
.xzai .clearfix{
    padding-bottom:5px;
    border-bottom:1px dashed #ccc;
}
/* 下载下的input的样式，行高，溢出隐藏，内容折叠...省略 */
.xzai ul>li:nth-child(2)>input{
    height:28px;
    color:#aaa;
    font-size:12px;
    line-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    width:200px;
    margin-left:20px;
    border:1px solid #ccc;
}
/* 倒数第二个按钮左边距 */
.xzai ul>li:nth-last-child(2)>button{
    margin-left:20px;
    color:#fff;
    background:#ff6c00;
    border:#fff;
    border-radius:5px;
}
/* 最后一个按钮的颜色 */
.xzai ul>li:last-child>button{
    margin-left:20px;
    color:#fff;
    background:#249ff1;
    border:#fff;
    border-radius:5px;
}
/* 下载下的ul的li去点 */
.xzai ul>li{
    list-style:none;
}
/* 下载下的ul的li的最后一个元素字体 */
.xzai ul>li:last-child{
    font-size:14px;
    color: #999999;
    line-height: 30px
}
/* 标题的字体大小，颜色 */
.clearfix>div>h1{
    font-size: 24px;font-weight:800;color:#333333;
}
/* 内容的字体大小颜色 */
.clearfix>div>p{
    font-size: 14px;color:#666;
}
/* .clearfix>div>p:nth-last-child(2)>span:last-child{
    font-size: 14px;color:#666;
    display:block;padding-left:40px;
    margin-top:-20px;
} */
/* 设置详情列表的隐藏和显示 */
.disp{
    /* width:220px;height:200px;
    transition:all .5s linear;
    overflow: hidden; */
    display: none
}

</style>