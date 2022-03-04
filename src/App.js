import './index.css';
import { AppFeed } from './screens/AppFeed';
import { AppLogin } from './screens/AppLogin';
import { AppConversations } from './screens/AppConversations';
import { AppExplorer } from "./screens/AppExplorer";
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
        <Route path="/direct/inbox/" element={<AppConversations />} />
        <Route path="/explore" element={<AppExplorer />} />
      </Routes>
    </Router>
  );
}

export default App;
