<template>
<div class="container progress-bar-striped_my_index">
<!-- 最新电影1F -->
    <div class="row my-index-px mt-3">
        <div class="col-80">
        <div class="mt-3 bg-white px-3 pt-4 border">
            <img src="img/index/icon_1.png" alt=""/>
            <a class="text-dark pl-3" href="#">最新电影</a>
            <a class="float-right text-muted pr-4" href="#">更多></a>
        <div class="border-bottom pt-2"></div>
            <fiml1></fiml1>
        </div>
    </div>
<!-- 热门电影 -->
    <div class="col-20">
        <fiml2></fiml2>
    </div>
    </div>
</div>
</template>
<script>
import Film1 from './Film1'
import Film2 from './Film2'
export default {
    components:{
        "fiml2":Film2,
        "fiml1":Film1
    },
    data(){
        return {
            others:[]
        }
    },
    methods:{},
    created(){
        this.axios.get("index").then(result=>{
            this.others=result.data
            console.log(this.others)
        })
    }
}
</script>

<style scoped>
#d1{
    display: inline-block
}
/* 设置背景颜色和背景图片 */
.progress-bar-striped_my_index {
    background:url(../../public/img/index/bg_icon.jpg);
    background-color:#ededed;
    margin:0 auto;
}
/* 设置总div的左右内边距，使总体内容居中 */
/* .my-index-px{
    padding:0 6%;
} */
/* 设置最新电影中图片的固定宽高和内外边距清0 */
.my_header_width{
    padding:0;
    margin:0;
    width:162px;
    height:244px;
}
/* 设置热门电影中图片的固定宽高和内外边距清0 */
.my_header_sm_width{
    padding:0;
    margin:0;
    width:33px;
    height:51px;
}
/* 设置热门电影里a标签的字体颜色和大小 */
.list-inline-item>div>div>a{
    font-size:14px;
    margin-left:10px;
    color:#000;
}

/* 最新电影中的"更多"设置为右浮动和字体大小 */
.float-right{
    float:right;
    font-size:14px;
}

/* 设置像素最小为1200px时
左边最新电影宽度为80%，右边热门电影宽度为20%
最新电影里的图片宽度为20%，5张图片
*/
@media (min-width:1200px) {
    .col-80{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 80%;
        flex: 0 0 80%;
        max-width: 80%;
    }
    .col-20{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
    .col-13{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
}
/* 设置像素最小为992px，最大为1199px时
右边热门电影隐藏
最新电影里的图片宽度为20%，5张图片
*/
@media (min-width:992px) and (max-width:1199px) {
    .col-20{
        display: none
    }
    .col-13{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
    }
}
/* 设置像素最小为776px，最大为991px时
右边热门电影隐藏
最新电影里的图片宽度为25%，4张图片
*/
@media (max-width:991px) and (min-width: 798px) {
    .col-20{
        display: none
    }
    .col-13{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
}
/* 设置像素最大为775px时
右边热门电影隐藏
最新电影里的图片宽度为3333%，4张图片
*/
@media (max-width:797px) and (min-width:576px) {
        .col-20{
            display: none
        }
        .col-13{
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.3333%;
            flex: 0 0 33.3333%;
            max-width: 33.3333%;
            }
}
@media (max-width:575px) {
        .col-20{
            display: none
        }
        .col-13{
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
            }
}
/* 内外边距清零 */
*{
    margin:0;padding:0
}
</style>