import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage';
import Navbar from './components/Navbar/Navbar';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import "@fontsource/lato";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<TasksPage />}/>
      <Route path="/welcome" element={<WelcomePage/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
