<template>
    <div class="content home">
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
.home .ivu-tabs{
    padding-top: 24px;
}

.home .ivu-tabs-bar{
    width: 100%;
    margin-bottom: 0;
    position: fixed;   
    top: 36px;
    left: 0;
    z-index: 10;
    background: #dbe2ef;
}

.home .ivu-tabs-nav{
  width: calc(100% - 16px);
  margin-left: 16px;
  text-align: center
}

.home .ivu-tabs-nav .ivu-tabs-tab{
  width: calc(50% - 16px);
}

</style>