"use strict";
class TodoList {
    constructor(selector) {
        this.target = document.querySelector(selector);
        this.createHTML();
    }
    createHTML() {
        var _a;
        this.input = document.createElement('input');
        this.button = document.createElement('button');
        //personalizza
        this.input.classList.add('form-control');
        this.button.classList.add('btn', 'btn-primary');
        this.button.innerText = 'Aggiungi';
        this.button.addEventListener('click', (e) => {
            this.addTodo();
        });
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.append(this.input, this.button);
    }
    addTodo() {
        var _a;
        if (!this.input.value)
            return;
        const div = document.createElement('div');
        div.classList.add('alert', 'alert-info');
        div.innerText = this.input.value;
        (_a = this.target) === null || _a === void 0 ? void 0 : _a.append(div);
        this.input.value = '';
    }
}
new TodoList('#todo1');
new TodoList('#todo2');
