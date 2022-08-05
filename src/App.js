import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <PostForm />
      </div>
    </Provider>
  );
}

export default App;
