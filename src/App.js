import './App.css';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from './components/Home';
import PartnerRegistration from './components/PartnerRegistration';
import axios from 'axios';

axios.defaults.baseURL = 'https://mpsinfoservices.com/skynet/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/partner-registration' element={<PartnerRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
