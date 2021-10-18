import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
} from "react-router-dom";
import Main from "./screens/main/Main";
import Favorite from "./screens/favorite/Favorite";
import Watch from "./screens/watch/Watch";
import NotFound from "./screens/notFound/NotFound";
import Header from "./components/header/Header";

function App() {
  console.log("v3", process.env.REACT_APP_v3_auth);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Main} />
        <Route exact path={"/fave"} component={Favorite} />
        <Route exact path={"/watch"} component={Watch} />
        <Route path="*" component={NotFound} />
        {/** Alt att redirecta tbax till förstasidan */}
      </Switch>
    </Router>
  );
}

export default App;
