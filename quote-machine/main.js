new Vue({
    el: "#app",
    data: {
        quote_array: quote_array,
        current_quote: quote_array[0],
        show: true
    },
    methods: {
        newQuote: function() {
            const num = Math.floor(Math.random() * quote_array.length)
            this.current_quote = quote_array[num];
            this.show = !this.show
        }
    },
    updated() {
        this.show = true
    },
});