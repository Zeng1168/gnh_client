<template>
    <div>
        <b-card v-for="(item,index) in dataList" :key="index"  
        v-b-hover="hovered => item.isHovered = hovered" 
        :bg-variant="item.isHovered ? 'light' : ''" 
        body-class="p-0" footer-class="p-0" 
        style="float:left; width:200px; margin:10px;"
        img-src="https://picsum.photos/300/300/?image=41"  
        img-alt="Image" 
        img-top>
            <b-card-body class="p-1">
                <h5 class="m-0">软件工程</h5>
            </b-card-body>
            <template v-slot:footer>
                <div class="text-muted m-1" style="height:20px; width:100%; overflow:hidden">
                    <span>
                        <b-icon class="h5 m-0" icon="people-fill" variant="success"></b-icon>
                        45
                    </span>
                    <span>
                        <b-icon class="h5 m-0" icon="pencil" variant="warning"></b-icon>
                        软件工程作业3
                    </span>
                </div>
            </template>
        </b-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataList:[],
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            for(var i=0; i<5; i++){
                this.dataList.push({isHovered:false})
            }
        }
    }
}
</script>

<style scoped>
.clean-bottom{
    padding-bottom: -20px;
}
</style>