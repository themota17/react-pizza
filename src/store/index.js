import { createStore } from "vuex";

import app from "./app";
import basket from "./basket";

export default createStore({
  modules: { app: app, basket: basket },
});
