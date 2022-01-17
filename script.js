new Vue ({
    el: '#app',
    data: {
        todo: [
            "fare i compiti",
            "fare il bucato",
            "fare il bucato",
        ],
        temporaryItem: ''
    },
    methods: {
        addItem: function() {
            this.todo.push(this.temporaryItem)
            this.temporaryItem=''
        },
        removeItem: function(index){
            console.log("rimuovo", index)
            this.todo.splice(index, 1)
        }
    } 
});