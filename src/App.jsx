import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTaskModal from './components/AddTaskModal/AddTaskModal';
import NavBar from './components/Navbar/Navbar';
import "@fontsource/lato";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/modal" element={<AddTaskModal />}/>
      <Route path="/" element={<NavBar />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
