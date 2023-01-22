import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(10);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/*' element={<Main setProgress={setProgress} key='' category='' />} />
          <Route exact path='/Sports' element={<Main setProgress={setProgress} key='sports' category='sports' />} />
          <Route exact path='/Technology' element={<Main setProgress={setProgress} key='technology' category='technology' />} />
          <Route exact path='/Science' element={<Main setProgress={setProgress} key='science' category='science' />} />
          <Route exact path='/Startup' element={<Main setProgress={setProgress} key='startup' category='startup' />} />
          <Route exact path='/Entertainment' element={<Main setProgress={setProgress} key='entertainment' category='entertainment' />} />
          <Route exact path='/National' element={<Main setProgress={setProgress} key='national' category='national' />} />
          <Route exact path='/Business' element={<Main setProgress={setProgress} key='business' category='business' />} />
          <Route exact path='/World' element={<Main setProgress={setProgress} key='world' category='world' />} />
          <Route exact path='/Politics' element={<Main setProgress={setProgress} key='politics' category='politics' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
