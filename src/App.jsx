import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import Navbar from './components/Navbar/Navbar';
import "@fontsource/lato";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<TasksPage />}/>
      <Route path="/tutorial" element={<TutorialPage />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
