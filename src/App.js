import React from "react";
import NavBar from "./components/navBar.jsx";
import Users from "./components/users.jsx";
import { Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main.jsx";
import Login from "./components/layouts/login.jsx";
import UserPage from "./components/userPage.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route
          path="/users/:userId"
          render={(props) => <UserPage {...props} />}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/main" exact component={Main} />
        <Route path="/" component={Users} />
      </Switch>
    </>
  );
};

export default App;
