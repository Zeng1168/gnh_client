<template>
    <b-row class="m-2">
        <b-col cols="3">
            <group-list></group-list>
        </b-col>
        <b-col cols="9">
            <b-card title="Card Title" no-body>
                <h3 class="m-2 p-0">软件工程作业群</h3>
                <b-card-header header-tag="nav">
                    <b-nav card-header tabs>
                        <b-nav-item to="/main/group/task" exact exact-active-class="active">
                            <b-icon icon="pencil" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                            学习任务
                        </b-nav-item>
                        <b-nav-item to="/main/group/members"  exact exact-active-class="active">
                            <b-icon icon="people" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                            群成员
                        </b-nav-item>
                        <b-nav-item to="/main/group/teams" exact exact-active-class="active">
                            学习小组
                        </b-nav-item>
                        <b-nav-item to="/main/group/manage" exact exact-active-class="active">
                            群管理
                        </b-nav-item>
                    </b-nav>
                </b-card-header>
                <b-card-body class="text-center">
                    <router-view/>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>


<script>
import groupList from "./GroupList"
export default {
    components:{groupList},
    data(){
    },
    mounted(){
    },
    methods:{
    }
}
</script>
