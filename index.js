// Objeto contendo as tarefas a serem feitas e métodos
var list = new Vue({
    el: '#toDoList',
    data: {
        tasks: [
            {
                task: "Plantar batata",
                do: false
            },
            {
                task: "Comprar Rabanete",
                do: false
            },
            {
                task: "Regar as plantas",
                do: false
            },
            {
                task:"Preparar o almoço",
                do: false
            }
        ]
    },
    methods:{
        // Altera o o status da tarefa para concluida || não concluida
        doAlt: function(atual, index){
            atual.do = !atual.do
            let elementoItem = document.querySelectorAll(".item")[index]
            let elementoSpan = elementoItem.querySelector("span")
            if(atual.do == false){
                elementoItem.style.opacity = "1"
                elementoSpan.style.textDecoration = "none"
            }else{
                elementoItem.style.opacity = "0.4"
                elementoSpan.style.textDecoration = "line-through"
        }
        },
        // Remove o um elemento da lista de tarefas
        remove: function(atual, index){
            let elementos = document.querySelectorAll(".item")
            let elemento = elementos[index]
            let elementoSpan = elemento.querySelector("span")
            if(elemento.style.opacity <= "1" && elementoSpan.style.textDecoration == "line-through"){
                elemento.style.opacity = "1"
                elementoSpan.style.textDecoration = "none"
            }
            //Reorganiza a estilização CSS para manter a consistencia
            for(let i = index; i < elementos.length - 1;i++){
                if(elementos[i + 1].style.opacity <= "1" && elementos[i + 1].querySelector("span").style.textDecoration == "line-through"){
                    elementos[i].style.opacity = "0.4";
                    elementos[i].querySelector("span").style.textDecoration = "line-through"
                }else{
                    elementos[i].style.opacity = "1";
                    elementos[i].querySelector("span").style.textDecoration = "none"
                }
            }
            //remove item do array
            this.tasks.splice(index, 1)
            
        }
    }
})
    // Objeto com método para adicionar novas tarefas a lista
var input = new Vue({
    el: "#addItem",
    methods: {
        addTask: function (event){
            event.preventDefault()
            let inputElement = document.querySelector("input");
            list.tasks.push({task: inputElement.value, do: false})
            inputElement.value = ""
        }
    }
})