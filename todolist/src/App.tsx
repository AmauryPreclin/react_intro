// Vendor
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Internal
import "./App.css";
import { Todolist } from "./Todolist.tsx";
import { WeekDate } from "./WeekDate.tsx";
import { Header } from "./Header.tsx";

const CtxTodolistDefault = {
  monday: {
    tasks: [],
    setTasks: () => {},
    moveUp: () => {},
    moveDown: () => {},
  },
};

const CtxTodolist = React.createContext(CtxTodolistDefault);
const {
  Provider: CtxTodolistProvider,
  Consumer: CtxTodolistConsumer,
} = CtxTodolist;

function App() {
  const [tasksMonday, setTasksMonday] = React.useState([]);
  const [tasksTuesday, setTasksTuesday] = React.useState([]);
  const [tasksWednesday, setTasksWednesday] = React.useState([]);
  const [tasksThursday, setTasksThursday] = React.useState([]);
  const [tasksFriday, setTasksFriday] = React.useState([]);

  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/:day">
            <CtxTodolistProvider value={CtxTodolistDefault}>
              <Todolist
                className="todolistAlone"
                tasks={tasksMonday}
                setTasks={setTasksMonday}
              />
            </CtxTodolistProvider>
          </Route>
          <Route path="/">
            <WeekDate />
            <div id="app-container">
              <Todolist
                title="Monday"
                tasks={tasksMonday}
                setTasks={setTasksMonday}
              />
              <Todolist
                title="Tuesday"
                tasks={tasksTuesday}
                setTasks={setTasksTuesday}
              />
              <Todolist
                title="Wednesday"
                tasks={tasksWednesday}
                setTasks={setTasksWednesday}
              />
              <Todolist
                title="Thursday"
                tasks={tasksThursday}
                setTasks={setTasksThursday}
              />
              <Todolist
                title="Friday"
                tasks={tasksFriday}
                setTasks={setTasksFriday}
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

export {
  CtxTodolist,
  CtxTodolistConsumer,
  CtxTodolistProvider,
  CtxTodolistDefault,
};
