<template>
<div>
<!-- 使用页头子组件 -->
<header09></header09>
<div class="progress-bar-striped_my_index pb-3">
<div class="container-fluid pt-4 my-index-px">
<!-- 使用轮播图组件 -->
    <slide></slide>
    </div>
<!-- 使用一楼电影组件 -->
<film></film>
<film></film>
<film></film>
<!-- 使用页尾子组件 -->
<footer09 style="margin-top:50px;"></footer09>
</div>
</div>
</template>
<script>
// (1)引入页头子组件
import Header09 from './Header09'
// (2)引入页尾子组件
import Footer09 from './Footer09'
// (3)引入电影组件
import Film from './Film'
// (4)引入轮播图组件
import Slide from './Slide'
export default {
    components:{
        "header09":Header09,   // 注册页头子组件
        "footer09":Footer09,   // 注册页尾子组件
        "film":Film,           // 注册电影组件
        "slide":Slide          // 注册轮播图组件
    }
}
</script>
<style scoped>
/* 设置背景颜色和背景图片 */
.progress-bar-striped_my_index {
    background:url(../../public/img/index/bg_icon.jpg);
    background-color:#ededed;
}
/* 设置总div的左右内边距，使总体内容居中 */
.my-index-px{
    padding:0 6%;
}
</style>