import { action, computed, observable, runInAction } from "mobx";


class TodoStore{
   @observable todos = ["buy apple", "buy oranges"]
   @observable filter = "";
   @action addtodo(){
       console.log(this.todos);
       runInAction(() => {
        this.todos.push("BMW");
       })
      
   }
   @computed get count(){
       return this.todos.length;
   }
}

const Store  = new TodoStore();
export default Store;
