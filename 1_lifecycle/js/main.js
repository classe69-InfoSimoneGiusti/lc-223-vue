var app = new Vue({
    
    el: '#app',

    data: {
        message: 'ciao mondo'
    },

    methods: {

        mostraAvviso(messaggio) {
            console.log(messaggio);
        },
        azione1() {
            alert('Svolta azione 1');
        },
        azione2() {
            console.log('Svolta azione 2');
        }

    },

    mounted() {
        //alert('Vue è stato creato');
    }

});