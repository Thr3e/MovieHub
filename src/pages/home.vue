<template>
    <div class="content">
        <Tabs>
            <TabPane label="正在热映">
                <Loader v-if="!getTheartSuccess" :isAnimation="!getTheartSuccess"/>
                <Intheaters @getTData="hasTheartData" v-show="getTheartSuccess"/>
            </TabPane>
            <TabPane label="即将上映">
                <Loader v-if="!getComingSuccess" :isAnimation="!getComingSuccess"/>
                <Coming @getCData="hasComingData" v-show="getComingSuccess"/>
            </TabPane>
        </Tabs>
        
    </div>
</template>

<script>
import Loader from '../components/loading'
import Intheaters from '../components/intheater'
import Coming from '../components/coming'
export default {
    name:'Home',
    data(){
        return{
            getTheartSuccess:false,
            getComingSuccess:false
        }
    },
    components:{
        Loader,
        Intheaters,
        Coming
    },
    watch:{
        getTheartSuccess(newVal){
            console.log(newVal);
        },
        getComingSuccess(newVal){
            console.log(newVal + 'c')
        }
    },
    methods:{
        hasTheartData(data){
            this.getTheartSuccess = data;
        },
        hasComingData(data){
            this.getComingSuccess = data;
        }
    }
}
</script>

<style>
.ivu-tabs-bar{
    margin-bottom: 0;
}

</style>