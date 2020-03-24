<template>
<div>
    <b-list-group>
        <b-list-group-item href="#" active class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
            </div>

            <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small>Donec id elit non mi porta.</small>
        </b-list-group-item>

        <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
        </b-list-group-item>

        <b-list-group-item href="#" disabled class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Disabled List group item</h5>
            <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
        </b-list-group-item>
    </b-list-group>
    <div style="width:100%;" align="right">
        <b-button variant="link">
            <h3>创建群</h3>
        </b-button>
    </div>
</div>
</template>


<script>
export default {
    data(){
        return {
            groupList:[],
        }
    },
    mounted(){
        this.getGroupData();
    },
    methods:{
        getGroupData(){
            for(var i=0; i<5; i++){
                this.groupList.push({isHovered:false})
            }
        }
    }
}
</script>