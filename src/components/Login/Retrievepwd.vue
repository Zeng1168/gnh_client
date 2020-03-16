<template>
   
      <el-container class="page-control">
    <el-main>
        <el-row :gutter="8" style="margin:0 auto;margin-top:6%; width:80%;">
            <el-col :xs="0" :sm="3" :md="6" :lg="6" :xl="8">&nbsp;</el-col>
            <el-col :xs="24" :sm="18" :md="12" :lg="12" :xl="7">
                <el-card class="box-card" style="min-height:60vh; background-color:rgba(253,253,253,0.8);">
                    <div slot="header" class="clearfix">
                        <span style="font-size:20px">找回密码</span>
                    </div>
                    <!-- 注册表单 -->
                    <el-form style="min-height:50vh;" ref="formreg" label-width="80px">
                        
                        <el-form-item label="手机号">
                            <el-input  v-model="bindPhone"></el-input>
                        </el-form-item>
                        
                        <el-form-item label="新密码">
                            <el-input show-password v-model="password1"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input show-password v-model="password2"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" style="text-align:left">
                            <el-input style="width:40%" v-model="VerificationCode"  auto-complete="off"></el-input>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <el-button @click="VerificationCodef()" :disabled="!disabledCodeBtn" type="success">{{codeText}}</el-button>
                        </el-form-item>
                        <el-form-item style="min-height:10px" label=" " align="right">
                            <div >&nbsp;</div>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" style="width:60%;" @click="register">确 认</el-button>
                             <router-link :to="{path:'/login'}" style="color:blue;float:right">去登录</router-link>
                        </el-form-item>
                    </el-form>
                
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="3" :md="6" :lg="6" :xl="8">&nbsp;</el-col>
        </el-row>
    </el-main>  
    <el-footer class="copy-right" style="min-height:50px;">
        <div>
            Copyright &copy; 2019.<a target="_blank" href="#">赣南师范大学软件开发者联盟</a><br/> 
        </div>
        <div style="margin-top:3px;">
            ICP:<a>湘ICP备19000633号</a>
        </div>
    </el-footer>

</el-container>
   
</template>

<script>
export default {
    data(){
        return {
            disabledCodeBtn:'false',   // 是否可以点击发送验证码的按钮
            time:'',    //倒计时
            codeText:'获取验证码',
            bindPhone:'',   
            password1:'',
            password2:'',
            VerificationCode:'', //验证码
            tureVerificationCode:'',
        }
    },
    computed: {
        
    },
    mounted() {
        
    },
    methods: {
        register(){
            if( !this.bindPhone |  (this.password2==='') | (this.password2==='')){
                this.warnMsg("请填写完整");
            }
            else if (!(this.password1===this.password2)){
                this.warnMsg("密码不一致");
            }
            else if(this.tureVerificationCode!=this.VerificationCode | this.VerificationCode===''){
                this.warnMsg("验证码错误");
            }
            else{
                 console.log("登录")
                 
            }
           
        },
       //获取验证码
        VerificationCodef(){
            if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.bindPhone))){
               this.warnMsg("手机号有误")
            }
            else{
               this.countDown(60); 
               //发送请求验证码
            }
            
        },
        // 倒计时方法
      countDown (time) {
        if (time === 0) {
          this.disabledCodeBtn = true
          this.codeText = "获取验证码"
          return
        } else {
          this.disabledCodeBtn = false;
          this.codeText = '重新发送(' + time + ')'
          time--
        }
        setTimeout(()=> {
          this.countDown(time)
        }, 1000)
      }, 
    },
}
</script>

<style scoped>

.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
background: #99a9bf;
}
.bg-purple {
background: #d3dce6;
}
.bg-purple-light {
background: #e5e9f2;
}
.grid-content {
border-radius: 4px;
min-height: 36px;
}

.page-control{
    width: 100%;
    height: 100%;
    background-image: url('./../../assets/image/back.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.copy-right{
    color: azure;
}
a{
    text-decoration: none;
    color:azure;
}
</style>

</style>