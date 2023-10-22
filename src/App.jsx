import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage';
import "@fontsource/lato";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<TasksPage />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
