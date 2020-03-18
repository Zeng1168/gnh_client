<template>
    <b-row>
        <b-col cols="12">
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">作业助手</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav >
                        <b-nav-item to="/main/home" exact exact-active-class="active">首页</b-nav-item>
                        <b-nav-item to="/main/group" exact exact-active-class="active">学习群</b-nav-item>
                        <b-nav-item to="/main/store" exact exact-active-class="active">我的题库</b-nav-item>
                        <b-nav-item to="/main/excise" exact exact-active-class="active">我的练习</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto" >
                        <b-nav-item-dropdown right  style="padding:0">
                            <template v-slot:button-content >
                                <b-img :src="userInfo.headPicture" blank-color="#88f" height="40" width="40"  rounded="circle" alt=""></b-img>
                            </template>
                            <b-dropdown-item href="#">用户信息</b-dropdown-item>
                            <b-dropdown-item href="#">密码修改</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item href="#">退出登录</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-col>
        <b-col cols="12"  style="min-height:500px;">
            <router-view/>
        </b-col>
        <b-col cols="12" class="copy-right" style="min-height:50px;">
            <div>
                Copyright &copy; 2020.03<b-link href="http://www.beian.miit.gov.cn/">赣南师大软件联盟</b-link>
            </div>
            <div style="margin-top:3px;">
                ICP:<b-link href="http://www.beian.miit.gov.cn/">湘ICP备19000633号</b-link>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data(){
        return {
            userInfo:{
                headPicture:"http://img.gnnu.tech/picture/images/20200225222212_demo_head.jpg"
            }
        }
    },
    computed: {
        
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>

<style scoped>
.copy-right{
    color: #999999;
    padding-top:8px;
}
a{
    text-decoration: none;
    color: #999999;
}
</style>