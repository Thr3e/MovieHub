<template>
    <div class="content">
        <div class="new-movie">
            <h3>火热大片</h3>
            <NewMovie/>
        </div>
        <div class="ranking-list">
            <mt-swipe :show-indicators="false" :auto="0">
                <mt-swipe-item><Top250/></mt-swipe-item>
                <mt-swipe-item><Weekly/></mt-swipe-item>
                <mt-swipe-item><Usbox/></mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
import Top250 from '../components/top250'
import Weekly from '../components/weekly'
import Usbox  from '../components/usbox'
import NewMovie from '../components/newmovie'
export default {
    name:'Search',
    data(){
        return{}
    },
    components:{
        Top250,
        Weekly,
        Usbox,
        NewMovie
    }
}
</script>

<style scoped>
.ranking-list{
    height: 340px;
}
.new-movie{
    height: 300px;
}

</style>