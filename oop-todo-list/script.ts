class TodoList{

    target!:HTMLDivElement|null
    input!:HTMLInputElement
    button!:HTMLButtonElement

    constructor(selector:string){
        this.target = document.querySelector(selector);
        this.createHTML()
    }


    createHTML(){
        this.input = document.createElement('input')
        this.button = document.createElement('button')

        //personalizza
        this.input.classList.add('form-control')

        this.button.classList.add('btn','btn-primary')
        this.button.innerText = 'Aggiungi'

        this.button.addEventListener('click', (e) => {            
            this.addTodo()
        })


        this.target?.append(this.input, this.button)
    }


    addTodo(){
        if(!this.input.value) return


        const div = document.createElement('div')
        div.classList.add('alert','alert-info')


        div.innerText = this.input.value
            
        this.target?.append(div)

        this.input.value = ''
    }

}


new TodoList('#todo1')
new TodoList('#todo2')