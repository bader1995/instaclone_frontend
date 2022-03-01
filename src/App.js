import './index.css';
import { AppFeed } from './screens/AppFeed';
import { AppLogin } from './screens/AppLogin';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AppFeed />} />
        <Route path="/login" element={<AppLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
