import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTaskModal from './components/AddTaskModal/AddTaskModal';
import Navbar from './components/Navbar/Navbar';
import "@fontsource/lato";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/modal" element={<AddTaskModal />}/>
      <Route path="/" element={<Navbar />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
