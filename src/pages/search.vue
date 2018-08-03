<template>
    <div class="content">
        <div class="new-movie">
            <h1>火热大片</h1>
            <NewMovie class="newmovie"/>
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

<style>
.ranking-list{
    height: 340px;
}
.new-movie{
    height: 336px;
    margin: 30px auto;
}
.new-movie h1{
    text-align: left;
    font-weight: 500;
    padding-left: 10px;
}

.ranking-list .mint-cell-text{
    display: inline-block;
    width: 80%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;

}

.ranking-list .sub-wrap{
    width: 100px;
}

.ranking-list .star-box{
    font-size: 12px;
    color: orange
}

.ranking-list .sub-wrap button{
    outline: 0;
    font-size: 12px;
    background: #fff;
    padding: 3px 8px;
    border: 1px solid #de5b7b;
    color: #de5b7b;
    margin-top: 5px;
    border-radius: 5px;
}

</style>