// Vendor
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Internal
import "./App.css";
import { Todolist } from "./Todolist.tsx";
import { WeekDate } from "./WeekDate.tsx";
import { Header } from "./Header.tsx";
import {
  CtxTodolist,
  CtxTodolistProvider,
  CtxTodolistConsumer,
  CtxTodolistDefault,
  CtxTodolistTest,
} from "./CtxTodolist.tsx";

function App() {
  const [tasksMonday, setTasksMonday] = React.useState([]);
  const [tasksTuesday, setTasksTuesday] = React.useState([]);
  const [tasksWednesday, setTasksWednesday] = React.useState([]);
  const [tasksThursday, setTasksThursday] = React.useState([]);
  const [tasksFriday, setTasksFriday] = React.useState([]);

  const [todolists, setTodolists] = React.useState(CtxTodolistDefault);
  const value = { todolists, setTodolists };

  /*
  const [tasks, setTasks] = React.useState([]);
  const value = { tasks, setTasks };
*/
  return (
    <CtxTodolistProvider value={value}>
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/:day">
              <Todolist className="todolistAlone" />
            </Route>
            {/* <Route exact={true} path="/">
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
            </Route> */}
          </Switch>
        </div>
      </Router>
    </CtxTodolistProvider>
  );
}

export default App;
