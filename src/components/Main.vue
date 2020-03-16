<template>
    <el-container>
        首页
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