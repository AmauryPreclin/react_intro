// Vendor
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

// Internal
import "./App.css";
import { Todolist } from "./Todolist.tsx";
import { WeekDate } from "./WeekDate.tsx";
import { Header } from "./Header.tsx";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function App() {
  const {} = React.useState({});
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
          <Route path="/monday">
            <Todolist
              className="todolistAlone"
              title="Monday"
              tasks={tasksMonday}
              setTasks={setTasksMonday}
            />
          </Route>
          <Route path="/tuesday">
            <Todolist
              className="todolistAlone"
              title="Tuesday"
              tasks={tasksTuesday}
              setTasks={setTasksTuesday}
            />
          </Route>
          <Route path="/wednesday">
            <Todolist
              className="todolistAlone"
              title="Wednesday"
              tasks={tasksWednesday}
              setTasks={setTasksWednesday}
            />
          </Route>
          <Route path="/thursday">
            <Todolist
              className="todolistAlone"
              title="Thursday"
              tasks={tasksThursday}
              setTasks={setTasksThursday}
            />
          </Route>
          <Route path="/friday">
            <Todolist
              className="todolistAlone"
              title="Friday"
              tasks={tasksFriday}
              setTasks={setTasksFriday}
            />
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
