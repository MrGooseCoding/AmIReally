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
          ["telescope", "Experiment", "/app/experiment"],
          ["file-tray", "Log", "/app/log"],
          ["merge", "Analytics", "/app/analytics"]
      ]}/>
    </div>
  )
}

export default App;
