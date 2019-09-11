<template>
<div>
    <div class="container-fluid m-0 p-0">
    <header class="border">
        <div class="row mt-3">
            <div class="col-3">
                <div>
                    <img class="w-75 my_header_ml" src="../../public/img/header/logo.png" alt=""/>
                </div>
            </div>
            <div class="col-5">
                <div class="input-group w-65 my_header_input_ml mt-2">
                    <input class="form-control my_header_text" type="text" placeholder="请输入关键词..." value=""/>
                </div>
            </div>
            <div class="col-4">
                <div>
                    <div class="loginstyle pr-2">
                        <img src="img/login/02.png">
                        <router-link :to="{path:'/login'}" class="text-dark my_header_text" href="javascript:;">登录</router-link>丨<a class="text-dark my_header_text" href="javascript:;">注册</a>
                    </div>
                    <div id="qply" class="mt-2">
                        <img src="img/header/01.PNG" alt=""/>
                        <router-link :to="{path:'Search5'}" href="javascript:;" class="text-dark my_header_text">求片留言</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="my_header_bg mt-3 my_header_height">
            <div class="liwidth float-left">
                <ul class="m-0 p-0 nav my_header_ml">
                    <li class="nav-item px-2" :class="href=='/'?'active':href=='/details'?'active':''">
                        <router-link class="nav-link text-white my_header_text" :to="{path: '/'}">首页</router-link>
                    </li>
                    <li class="nav-item px-2" :class="href=='/Search'?'active':''">
                        <router-link :to="{path:'/Search'}" class="nav-link text-white my_header_text" href="javascript:;">电影</router-link>
                    </li>
                    <li class="nav-item px-2" :class="href=='/Search2'?'active':''">
                        <router-link :to="{path:'Search2'}" class="nav-link text-white my_header_text" href="javascript:;">连续剧</router-link>
                    </li>
                    <li class="nav-item px-2" :class="href=='/Search3'?'active':''">
                        <router-link :to="{path: 'Search3'}" class="nav-link text-white my_header_text" href="javascript:;">综艺</router-link>
                    </li>
                    <li class="nav-item px-2" :class="href=='/Search4'?'active':''">
                        <router-link :to="{path: 'Search4'}" class="nav-link text-white my_header_text" href="javascript:;">动漫</router-link>
                    </li>
                </ul>
            </div>
                <div class="float-right">
                    <span class="my-color jrgx">今日更新 "60" 部影片</span>
                </div>
        </div>
    </header>
</div>
</div>
</template>
<script>
export default {
    data(){
        return {
            href:""
        }
    },
    methods:{
        
    },
    created(){
        var href=location.href.split("#")[1]
        this.href=href;
        console.log(this.href)
    }
}
</script>
<style scoped>
.abc{
    color:red
}

.liwidth>ul>li>a{
    line-height:48px;
    margin:0 10px;
}
*{
    margin:0;padding:0
}
.w-65{
    width:65%;
}
.loginstyle{
    float: left;
    margin-left:7rem;
}
.loginstyle>img{
    padding-right:10px
}

.my-color {
    color: #999999;
}
.my_header_bg{
    background:#333;
}
.my_header_bg ul>li:hover{
    background:#222;
    height: 3rem;
}
.my_header_bg ul li.active{
    background:#222;
    height: 3rem;
}
.my_header_text{
    font-size:14px;
    line-height:32px;
}
.my_header_ml{
    margin-left: 5.5rem !important;
}
.my_header_input_ml{
    margin-left: 5rem !important;
}
.my_header_mr{
    margin-right: 7rem !important;
}
.my_header_height{
    height:3rem;
}
.form-control{
    background-color:#f5f5f5;
    height:2.3rem;
    border:none;
    width:380px;
}
.input-group>.form-control{
    background-repeat:no-repeat;
    background-position:98% center;
    background-image:url(../../public/img/header/search_16px_1164646_easyicon.net.png);
}
.float-right{
    float:right;
}
/* 右侧今日更新的字体位置 */
.jrgx{
    font-size:14px;
    line-height:48px;
    padding-right:50px;
}
@media (max-width:775px) {
    .jrgx{
        display: none;
    }
    .loginstyle{
        margin-left:5rem;
    }
}
@media (max-width:976px) {
    #qply{
        display: none;
    }
}
@media (max-width:586px) {
    .loginstyle{
        margin-left:3rem;
    }
}



</style>