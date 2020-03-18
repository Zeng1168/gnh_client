<template>
    <div>
        <b-card v-for="(item,index) in dataList" :key="index"  
            v-b-hover="hovered => item.isHovered = hovered" 
            :bg-variant="item.isHovered ? 'light' : ''"  
            title="数据库作业" 
            header-bg-variant="light" 
            border-variant="primary"  
            class="overflow-hidden mb-4" 
            align="center">
            <b-card-text align="left">
                内容：把课本抄十遍！
            </b-card-text>
            <template v-slot:footer align="left">
                <div style="width:150px; float:left">
                    提交状态：未提交
                </div>
                <div style="width:250px; float:left">
                    截止时间：2020-03-18 20:00
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
            for(var i=0; i<10; i++){
                this.dataList.push({isHovered:false})
            }
        }
    }
}
</script>