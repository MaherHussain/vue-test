

let vm = new Vue({
  el: "#app",
  data: {
    todo: "",
    todos: [],
    max_length: 100,
  },
  computed: {
    maxCharaLength() {
      return `you typed ${this.todo.length} characters of max ${this.max_length} characters`;
    },
    errorMessage() {
      return `you reached to max characters whitch is ${this.max_length}} characters`;
    },
  },
  methods: {
    submitData() {
        
      if (this.todo.length <= this.max_length) {
        this.todos.unshift(this.todo);
        this.todo = "";
        resultDiv.style.display = "none";
         stringtodos = JSON.stringify(this.todos);
         localStorage.setItem("todos", stringtodos);
       
        console.log(this.todos);
        console.log(stringtodos);
      }
    },
  },
  created(){
      if (localStorage.getItem("todos")) {
        console.log("todos");
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } else {
        console.log("No todos here");
      }
      
  }
});
const resultDiv = document.querySelector(".result");

let showText = () => {
  resultDiv.style.display = "block";
};