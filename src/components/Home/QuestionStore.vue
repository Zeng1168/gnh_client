<template>
    <div>
        <b-card v-for="(item,index) in dataList" :key="index"  
            v-b-hover="hovered => item.isHovered = hovered" 
            :bg-variant="item.isHovered ? 'light' : ''" 
            title="JSP题库" 
            class="m-1">
            <template solt:footer>
                <b-row>
                    <b-col cols="auto">
                            <b-icon icon="bar-chart-fill" variant="success"></b-icon>
                            &nbsp;56题
                    </b-col>
                    <b-col cols="auto" align="right">
                            <b-icon icon="calendar" variant="success"></b-icon>
                            &nbsp;2020-03-06创建
                    </b-col>
                </b-row>
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
            for(var i=0; i<3; i++){
                this.dataList.push({isHovered:false})
            }
        }
    }
}
</script>