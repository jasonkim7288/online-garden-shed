import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/app.css'

import LandingPage from './components/LandingPage'
import About from './components/About'
import SelectedPlantRecord from './components/SelectedPlantRecord'
import SelectedPlantFirstEntry from './components/SelectedPlantFirstEntry'
import GardenShedList from './components/GardenShedList'
import SelectedGardenShed from './components/SelectedGardenShed'
import CreateNewRecord from './components/CreateNewRecord'
import SearchPlant from './components/SearchPlant'
import CreateNewLog from './components/CreateNewLog'



const App = () => {
  return (
    <div id="app-container">
      <div className="navbar">
        Navbar
      </div>
      <div className="body">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/sheds/:shedId/:plantId/first-entry" component={SelectedPlantFirstEntry} />  
            <Route path="/sheds/:shedId/:plantId" component={SelectedPlantRecord} /> 
            <Route path="/sheds/:shedId" component={SelectedGardenShed} /> 
            <Route path="/sheds" component={GardenShedList} />  
            <Route path="/new-record" component={CreateNewRecord} />  
            <Route path="/search" component={SearchPlant} />
            <Route path="/new-log" component={CreateNewLog} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
      
  )
}

export default App