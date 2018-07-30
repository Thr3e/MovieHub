class Axios {
    constructor(){};
    get(){
        this.$axios.get(this.HOST + '/movie/in_theaters', {
            params: {
                apikey:'0b2bdeda43b5688921839c8ecb20399b',
                city:'成都',
                start:1,
                count:0
            }
        })
        .then(res => {
            console.log(res['data']['subjects'])
        })
        .catch(error => {
            console.log(error);
        })
    }
}





// export default 