import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Main from "./pages/main/Main";
import FindCards from "./pages/first/FindCards";
import ThirdCards from "./pages/third/ThirdCards";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/levelTwo' component={FindCards} />
        <Route path='/levelThird' component={ThirdCards} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
