<template>
    <div id="loader">
        <div class="loading-box" :class="{active : isAnimation}">
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Loading',
    data(){
        return{}
    },
    props:['isAnimation']
}
</script>

<style scope>
@keyframes beat {
    0%{
        transform: translateY(0)
    }
    25%{
        transform: translateY(-10px)
    }
    50%{
        transform: translateY(0)
    }
    100%{
        transform: translateY(0)
    }
}
#loader{
    width: 50px;
    height: 30px;
    margin: 10px auto;
}

.loading-box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.loading-dot{
    width: 12px;
    height: 12px;
    background: #112d4e;
    border-radius: 50%;
}

.active div:nth-child(1){
    animation: beat 1.4s ease-in-out infinite;
}
.active div:nth-child(2){
    animation: beat 1.4s ease-in-out infinite .2s;
}
.active div:nth-child(3){
    animation: beat 1.4s ease-in-out infinite .4s;
}

</style>