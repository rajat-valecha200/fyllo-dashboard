import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Topbar from "./Components/Topbar"
import FertilizerDashboard from "./Pages/FertilizerDashboard"
import FertilizerList from "./Pages/FertilizerList"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <FertilizerDashboard />
            </Route>
            <Route exact path="/fertilizers">
              <FertilizerList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
