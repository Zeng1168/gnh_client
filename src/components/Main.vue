<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div>
            <router-view/>
        </div>
    </div>
    <!-- <el-container>
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
    </el-container> -->
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