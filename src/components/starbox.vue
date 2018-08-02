<template>
    <div class="star-box">
        <p v-if="noRate">暂无评分</p>
        <div v-else>
            <Icon v-for="idx in 5" :key="idx" :type="getIcon(idx)"></Icon>
            <span>{{rating['average']}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'StarBox',
    data(){
        return{
            full:0,
            half:0,
            none:0,
            noRate:true
        }
    },
    props:['rating'],
    methods:{
        getIcon(idx){
            if(idx <= this.full) return 'ios-star'
            else if(this.half && idx === 5 - this.none) return 'ios-star-half'
            else return 'ios-star-outline'
        }
    },
    created(){
        if (this.rating['average'] !== 0){
            this.noRate = false;
            let stars = this.rating['stars'] / 10;
            this.full = parseInt(stars);
            this.none = parseInt(5 - stars);
            if(this.full + this.none !== 5){
                this.half = 1;
            }
        }
    }

}
</script>

<style scoped>

</style>