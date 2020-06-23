`npm i easy-peasy`
import { StoreProvider, createStore } from "easy-peasy";
create your model,  `touch src/model.js `
create some components for a todoList app, `mkdir src/components && touch src/components/AddTodo.js && touch src/components/TodoItem.js && touch src/components/Todos.js`

Import your stuff and create a store,
```
import model from "./model";
import { StoreProvider, createStore } from "easy-peasy";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const store = createStore(model);
```


# Defining your model.js

Here we can prototype data and also create "actions".

## Instructions:
Create the following actions:
1. toggle action
2. remove action
3. add action

4. setTodos
5. fetchTodos using [thunk]()