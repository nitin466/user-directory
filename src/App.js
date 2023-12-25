
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Directory from './components/view/directory/Directory';
import Profile from './components/view/pofile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </>
  
  );
}

export default App;
