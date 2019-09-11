<template>
    <div>
        <div class="top1"></div>
        <div class="loginstyle">
            <div>
                <a>微信登录</a>
                <a>qq登录</a>
            </div>
            <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:12}" type="text" v-model="uname"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" :attr="{maxlength:12}" type="password" v-model="upwd"></mt-field>
            
            <label class="pt-3"><input type="checkbox">自动登录</label><br>
            <label class="pt-3"><input type="checkbox">记住密码</label>
            <mt-button @click="login" class="pt-3" size="large">登录</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:"",
            upwd:""
        }
    },
    methods:{
        // 完成用户登录操作
        login(){
        // (1) 获取用户名和密码
            var uname=this.uname;
            var upwd=this.upwd;
            console.log(uname+":"+upwd)
        // (2)创建 正则表达式
            var reg=/^[a-z0-9]{3,12}$/i
        // (3)根据情况判断错误并提示
            if(!reg.test(uname)){
                this.$toast("用户名格式错误")
                return
            }
            if(!reg.test(upwd)){
                this.$toast("密码格式错误")
            }
        // (4)发送ajax请求
            var url="login";
            var obj={uname,upwd}
            this.axios.get(url,{params:obj}).then(result=>{
               if(result.data.code==1){
                   this.$messagebox("消息","登录成功").then(res=>{
                       this.$router.push("/index")
                   })
               }else{
                   this.$messagebox("消息","用户名或密码不正确")
               }
            })
        }
    }
}
</script>
<style scoped>
.top1{
    width:100%;
    height:50px;
    background:skyblue;
}
.loginstyle{
    width:350px;
    height: 400px;
    margin:100px auto;
    border:1px solid #666;
}
.loginstyle>div{
   padding-top:15px;
   width:100%;
   height:50px;
   display:flex;
   justify-content: space-around
}
label{
    margin-left:20px;
}
</style>