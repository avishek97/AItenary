
import './App.css'
import Outlet from './Outlet'
const App = () => {
  return (
    <div className="app-background">
      <Outlet />
    </div>
  )
}

export default App