import './styles/app.scss';
import Menu from './components/Menu'
import Attendees from './components/Attendees'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Menu></Menu>
      <Attendees></Attendees>
    </div>
  );
}

export default App;
