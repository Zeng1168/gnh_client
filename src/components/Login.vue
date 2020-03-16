<template>
<el-container class="page-control">
    <el-main>
        <el-row :gutter="10" style="margin-top:15%; width:100%;">
            <el-col :xs="0" :sm="3" :md="5" :lg="6" :xl="8">&nbsp;</el-col>
            <el-col :xs="24" :sm="18" :md="14" :lg="12" :xl="8">
                <el-card class="box-card" style=" background-color:rgba(253,253,253,0.8);">
                    <div slot="header" class="clearfix">
                        <span>作业助手</span>
                    </div>
                    <el-form ref="form" label-width="80px">
                        <el-form-item label="学号">
                            <el-input v-model="username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="password"  auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="记住密码" align="left">
                            <div style="width:50%; float:left">
                                <el-switch v-model="save"></el-switch>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :xs="0" :sm="3" :md="5" :lg="6" :xl="8">&nbsp;</el-col>
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
            save: false,
            username:'',
            password:''
        }
    },
    mounted(){
        if(this.notEmptyN(localStorage.getItem('shdgvcsydcush'))){
            this.save=true;
            this.username=localStorage.getItem('shdgvcsydcush');
            this.password=this.uncompile(localStorage.getItem('jsduvcydsvbcjdfg'));
        }
    },
    methods:{
        onSubmit() {
            var userPack={};
            userPack.u_num=parseInt(this.username);
            userPack.u_password=this.password;
            console.log('submit!');
            
            this.$axios.post('user/login',this.qs.stringify(userPack),{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'x-requested-with,content-type'
                }
            }).then(response=>{
                if(response.data.status==0){
                    response.data.message.loginTime= Date.parse(new Date())
                    this.$router.replace('/main/WorkSubmit');
                    this.$store.commit('userLogin',response.data.message);
                    
                    if(this.save){
                        localStorage.setItem('shdgvcsydcush',this.username);
                        localStorage.setItem('jsduvcydsvbcjdfg',this.compile(this.password));
                    }else{
                        localStorage.setItem('shdgvcsydcush','');
                        localStorage.setItem('jsduvcydsvbcjdfg','');
                    }
                }else{
                    this.warnMsg(response.data.message);
                }
                }).catch(error=>{
                    console.log(error);
                    this.warnMsg('服务器异常!');
                });
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
    background-image: url('./../assets/image/back.jpg');
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
