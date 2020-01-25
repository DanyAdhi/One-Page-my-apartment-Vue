var app = new Vue({
    el: '#app',
    data : {
        // title       : 'My Appartement',
        // address     : 'Ruko Boulevard Tekno, Jl. Tekno Widya, Setu, Kec. Setu, Kota Tangerang Selatan, Banten 15314',
        // about       : 'This is a description of my apartement'
        title       : sample.title,
        address     : sample.address,
        about       : sample.about,
        headerImageStyle : {
            'background-image' : 'url(sample/header.jpg)'
        },
        amenities   : sample.amenities,
        prices      : sample.prices,
        contracted  : true,
        modalOpen   : false,
    },
    watch: {
        modalOpen : function(){
            const className = 'modal-open';
            if(this.modalOpen){
                document.body.classList.add(className)
            }else{
                document.body.classList.remove(className)
            }

        }
    }
});

console.log(app._data.modalOpen)