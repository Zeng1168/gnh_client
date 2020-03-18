<template>
    <b-row no-gutters align="left">
        <b-col order="3" order-md="3" order-lg="3" order-xl="1" sm="12" md="4" lg="4" xl="4">
            <b-card class="m-3">
                <b-card-body class="p-1">
                    <b-row>
                        <b-col cols="auto">
                            <h4 class="m-0">学习群</h4>
                        </b-col>
                        <b-col cols="auto" align="right">
                            <b-link>
                                <b-icon icon="gear" variant="primary"></b-icon>
                                &nbsp;群管理
                            </b-link>
                        </b-col>
                    </b-row>
                </b-card-body>
                <b-card-text>
                    <study-group></study-group>
                </b-card-text>
            </b-card>
            
        </b-col>

        <b-col order="2" sm="12" md="8" lg="8" xl="5">
            <b-card title="我的任务" class="m-3">
                <b-card-text>
                    <my-homework></my-homework>
                </b-card-text>
            </b-card>
        </b-col>

        <b-col order="4" order-md="4" order-lg="4" order-xl="4" sm="12" md="12" lg="12" xl="3">
            <b-card title="我的题库" class="m-3">
                <b-card-text>
                    <question-store></question-store>
                </b-card-text>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import myHomework from './MyHomework'
import studyGroup from './StudyGroup'
import questionStore from './QuestionStore'
export default {
    components:{myHomework, studyGroup, questionStore },
    data(){
        return {

        }
    },
    mounted:{

    },
    methods:{

    }
}
</script>

<style scoped>

</style>