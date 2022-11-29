import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/loginPages/Login';
import AddRuleLogin from './components/loginPages/AddRuleLogin';
import RuleCheckUserLogin from './components/loginPages/RuleCheckUserLogin';
import AdderHome from './components/homePages/AdderHome';
import CheckerHome from './components/homePages/CheckerHome';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="AddRuleLogin" element={<AddRuleLogin />} />
          <Route path="RuleCheckUserLogin" element={<RuleCheckUserLogin />} />
          <Route path="AdderHome" element={<AdderHome />} />
          <Route path="CheckerHome" element={<CheckerHome />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
