new Vue ({
    el: '#app',
    data: {
        todo: [
            {
                text:"fare i compiti",
                done: false,
            },

            {
                text:"fare il bucato",
                done: true,
            },

            {
                text:"fare il bucato",
                done: false
            }            
            
        ],
        temporaryItem: ''
    },
    methods: {
        addItem: function() {
            // this.todo.push(this.temporaryItem)
            this.todo.push({
                text: this.temporaryItem,
                done: false
            });
            this.temporaryItem = ''
        },
        removeItem: function(index){
            this.todo.splice(index, 1)
        },
        doneUndone: function (index){
            this.todo[index].done = !this.todo[index].done
        }
    } 
});