import React from "react";

const CtxTodolistDefault = {
  monday: {
    tasks: [],
  },
  tuesday: {
    tasks: [],
  },
  wednesday: {
    tasks: [],
  },
  thursday: {
    tasks: [],
  },
  friday: {
    tasks: [],
  },
};

const CtxTodolistTest = {
  monday: {
    tasks: ["tâche1", "tâche2"],
  },
  tuesday: {
    tasks: [],
  },
  wednesday: {
    tasks: ["tâche1", "tâche2", "hmmmm"],
  },
  thursday: {
    tasks: ["tâche1"],
  },
  friday: {
    tasks: [],
  },
};

const CtxTodolist = React.createContext(CtxTodolistDefault);
const {
  Provider: CtxTodolistProvider,
  Consumer: CtxTodolistConsumer,
} = CtxTodolist;

export {
  CtxTodolist,
  CtxTodolistProvider,
  CtxTodolistConsumer,
  CtxTodolistDefault,
  CtxTodolistTest,
};
