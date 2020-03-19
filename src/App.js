import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import { BrowserRouter, Route } from "react-router-dom";
import Settings from "./components/Container/Settings/Settings";
import Dialogs from "./components/Container/Dialogs/Dialogs";
import Profile from "./components/Container/Profile/Profile";
import Music from "./components/Container/Music/Music";
import News from "./components/Container/News/News";
import NavBar from "./components/NavBar/NavBar";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className="app-navigation">
          <Route
            path="/profile"
            render={() => <Profile posts={props.state.posts} />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
