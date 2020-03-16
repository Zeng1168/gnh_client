<template>
<el-container class="page-control">
    <el-main>
        <el-row :gutter="8" style="margin:0 auto;margin-top:10%; width:80%;">
            <el-col :xs="0" :sm="3" :md="6" :lg="6" :xl="8">&nbsp;</el-col>
            <el-col :xs="24" :sm="18" :md="12" :lg="12" :xl="7">
                <el-card class="box-card" style="min-height:60vh; background-color:rgba(253,253,253,0.8);">
                    <div slot="header" class="clearfix">
                        <span style="font-size:20px">作业助手</span>
                    </div>
                    <!-- //密码登录 -->
                    <el-form style="min-height:40vh;" v-if="loginByPwd" ref="form" label-width="80px">
                        <el-form-item label="手机">
                            <el-input v-model="bindPhone"></el-input>
                        </el-form-item><br/>
                        <el-form-item label="密码" >
                            <el-input show-password type="password" v-model="passwords"></el-input>
                        </el-form-item>
                        <el-form-item label="记住密码" align="left">
                            <div >
                                <el-switch v-model="save"></el-switch>
                            </div>
                        </el-form-item>
                        <el-form-item style="margin-left:-20%">
                            <el-button style="width:50%" type="primary" @click="onSubmitbypwd">登 录</el-button>
                        </el-form-item>
                    </el-form>
                    <!-- 手机号登录 -->
                    <el-form style="min-height:40vh;" v-else ref="formtel" label-width="80px">
                        <el-form-item label="手机号">
                            <el-input v-model="telephone"></el-input>
                        </el-form-item><br/>
                        <el-form-item label="验证码" style="text-align:left">
                            <el-input style="width:40%" v-model="VerificationCode"  auto-complete="off"></el-input>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <el-button @click="VerificationCodef()" :disabled="!disabledCodeBtn" type="success">{{codeText}}</el-button>
                        </el-form-item>
                        <el-form-item style="min_height:40px" label=" " align="right">
                            <div >&nbsp;</div>
                        </el-form-item>
                        <el-form-item style="margin-left:-20%">
                            <el-button type="primary" style="width:50%;" @click="onSubmitbytel">登  录</el-button>
                        </el-form-item>
                    </el-form>
                <div style="text-align:right;">
                    <el-button v-if="loginByPwd" style="color:blue;padding-right:10px" type="text" @click="loginByPwd = !loginByPwd">短信登录</el-button>
                    <el-button v-if="!loginByPwd" style="color:blue;padding-right:10px" type="text" @click="loginByPwd = !loginByPwd">密码登录</el-button>
                    <span>|</span> 
                    <router-link :to="{path:'/retrievepwd'}" style="color:blue;">&nbsp;&nbsp;忘记密码</router-link>
                    <span>|</span> 
                     <router-link :to="{path:'/Register'}" style="color:blue;">&nbsp;&nbsp;注册</router-link>
                </div>
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
    name:'ulogin',
    data(){
        return {
            disabledCodeBtn:'false',   // 是否可以点击发送验证码的按钮
            time:'',    //倒计时
            codeText:'获取验证码',
            loginByPwd:true, //登录方式
            save: false,
            bindPhone:'',
            passwords:'',    
            telephone:'',   //手机号
            VerificationCode:'', //验证码
            tureVerificationCode:'',
        }
    },
    mounted(){
        // if(this.notEmptyN(localStorage.getItem('shdgvcsydcush'))){
        //     this.save=true;
        //     this.username=localStorage.getItem('shdgvcsydcush');
        //     this.password=this.uncompile(localStorage.getItem('jsduvcydsvbcjdfg'));
        // }
    },
    methods:{
        //密码登录
        onSubmitbypwd() {
            var userPack={};
            userPack.u_num=parseInt(this.bindPhone);
            userPack.u_password=this.password;
            console.log('密码登录');
            console.log(this.bindPhone);
            console.log(this.passwords);
            console.log(this.save);
            if(!this.bindPhone | !this.passwords){
                this.warnMsg("请填写完整")
            }
            else{
                //发送密码登录的请求
                this.$store.dispatch('userLoginFun',new Date());
                this.$axios.post('/userAccount/passwordLogin',this.qs.stringify({bindPhone:this.bindPhone,password:this.passwords}))
                .then(res =>{
                    console.log(res);
                    if(res.data.status===0){    //登录成功
                        this.Msg(res.data.msg);
                        this.$router.push('/main');
                    }
                    else{
                        this.warnMsg(res.data.msg);
                    }
                })
                .catch(err =>{
                    console.log(err);
                })
                // this.$axios.get('/user/selectById?id=1')
                // .then(res =>{
                //     console.log(res);
                // })
                // .catch(err =>{
                //     console.log(err);
                // })
                //  this.$router.push('/main');
            }
            //  this.$router.push('/main');
            // this.$axios.post('user/login',this.qs.stringify(userPack),{
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Access-Control-Allow-Methods': 'POST',
            //         'Access-Control-Allow-Headers': 'x-requested-with,content-type'
            //     }
            // }).then(response=>{
            //     if(response.data.status==0){
            //         response.data.message.loginTime= Date.parse(new Date())
            //          this.$router.replace('/main');
            //         // this.$store.commit('userLogin',response.data.message);
            //         //this.$router.push({path:'/Homepage'});
            //         if(this.save){
            //             localStorage.setItem('shdgvcsydcush',this.username);
            //             localStorage.setItem('jsduvcydsvbcjdfg',this.compile(this.password));
            //         }else{
            //             localStorage.setItem('shdgvcsydcush','');
            //             localStorage.setItem('jsduvcydsvbcjdfg','');
            //         }
            //     }else{
            //         this.warnMsg(response.data.message);
            //     }
            //     }).catch(error=>{
            //         console.log(error);
            //         this.warnMsg('服务器异常!');
            //     });
        },
        //手机登录
        onSubmitbytel(){
            console.log("手机登录");
            console.log(this.telephone);
            console.log(this.VerificationCode);
            // console.log(this.trueVerificationCode);
            if(this.telephone ===''){
                 this.warnMsg("请填写手机号");
            }
            // else if(this.VerificationCode!=this.trueVerificationCode){
            //     this.warnMsg("验证码有误");
            // }
            else{
                //验证码验证登录
                this.$axios.post('userAccount/smsLogin',this.qs.stringify({bindPhone:this.telephone,smsCode:this.VerificationCode}))
                .then(res =>{
                    console.log(res);
                    if(res.data.status === 0){  //短信验证登录成功
                        this.Msg(res.data.msg);
                        this.$router.push('/main');
                    }
                    else {
                        this.warnMsg(res.data.msg);
                    }
                })

            }
        },
        //获取验证码
        VerificationCodef(){
            if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.telephone))){
               this.warnMsg("手机号有误")
            }
            else{
               
               //发送请求验证码
               this.$axios.get('userAccount/getLoginSms?phone='+this.telephone)
               .then(res =>{
                   console.log(res);
                   console.log(res.data.msg);
                   this.countDown(60); 
                   this.VerificationCode='';
               })
               .catch(err =>{
                   console.log(err);
               })
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
        // 加密函数
        compile(code){    
            var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
            for(var i=1;i<code.length;i++){  
                c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
            }  
            return escape(c);  
        }, 
        // 解密函数
        uncompile(code){  
            code=unescape(code);  
            var c=String.fromCharCode(code.charCodeAt(0)-code.length);  
            for(var i=1;i<code.length;i++){  
                c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));  
            }  
            return c;  
        } 
    }
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
