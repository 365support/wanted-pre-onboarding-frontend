const todoReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return [...action.initTodos];
    case "ADD":
      return [...state, action.todo];

    case "DELETE":
      return state.filter((task) => task.id !== action.id);
    case "EDIT":
      return state.map((task) => (task.id === action.todo.id ? { ...action.todo } : task));
    default:
      return state;
  }
};

export default todoReducer;
