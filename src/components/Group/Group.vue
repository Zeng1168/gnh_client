<template>
    <b-row class="m-2">
        <b-col cols="3">
            <group-list></group-list>
        </b-col>
        <b-col cols="9">
            <b-jumbotron class="p-2" bg-variant="light" border-variant="dark"  style="min-height:500px;">
                <h3 class="m-0 p-0">软件工程作业群</h3>
                <b-nav tabs>
                    <b-nav-item to="/main/group/task"  exact exact-active-class="active">
                        <b-icon icon="pencil" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                        学习
                    </b-nav-item>
                    <b-nav-item to="/main/group/members" exact exact-active-class="active">
                        <b-icon icon="people" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                        群成员
                    </b-nav-item>
                </b-nav>
                <router-view/>
            </b-jumbotron>
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
