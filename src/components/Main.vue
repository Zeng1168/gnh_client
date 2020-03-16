<template>
    <el-container>
        <el-header style="">
            <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo"  
            mode="horizontal" 
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ccc"
            >
             <el-menu-item style="width:20%" index="1"></el-menu-item>
            <el-menu-item style="width:20%" index="1">处理中心</el-menu-item>
            <el-menu-item style="width:40%" index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
            <el-submenu style="width:20%" index="2">
                <template slot="title">我的</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            </el-menu>
        </el-header>
        <!-- {{this.$store.state.user}} -->
        <el-main>
            <router-view/>
        </el-main>
        <el-footer class="copy-right" style="min-height:50px;">
            <div>
                Copyright &copy; 2020.<a target="_blank" href="#">赣南师大软件联盟</a><br/> 
            </div>
            <div style="margin-top:3px;">
                ICP:<a href="http://www.beian.miit.gov.cn/">湘ICP备19000633号</a>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data(){
        return {

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

</style>