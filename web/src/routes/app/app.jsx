import './../../styles/styles.css'
import NavBar from './../../components/navBar'

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className='App'>
				<div className='appContainer'>
					<Outlet context={{}}/>
				</div>
      </div>
      <NavBar items={[
          ["add-circle", "Experiment", "/app/experiment"],
          ["join", "Log", "/app/log"],
          ["person", "Analytics", "/app/analytics"]
      ]}/>
    </div>
  )
}

export default App;
