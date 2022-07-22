var app = new Vue({
    
    el: '#app',

    data: {
        showHamburger: false
    },

    methods: {

        toggleHamburger() {

            this.mostraAvviso();

            /*if (this.showHamburger == true) {
                this.showHamburger = false;
            } else {
                this.showHamburger = true;
            }
            */

            this.showHamburger = !this.showHamburger;
        },

        mostraAvviso() {
            alert('Questo è un avviso');
        }

    }
   

});