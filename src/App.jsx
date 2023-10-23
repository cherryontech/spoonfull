import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage';
import Navbar from './components/Navbar/Navbar';
import "@fontsource/lato";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<TasksPage />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
