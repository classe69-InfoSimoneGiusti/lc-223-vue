var app = new Vue({
    
    el: '#app',

    data: {
        listaDellaSpesa: [ 'latte', 'uova', 'farina', 'pane' ]
    },

    methods: {
        mostraIndiceElemento(numero) {
            alert(numero);
        }
    }

});