import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTaskModal from './components/AddTaskModal';
import "@fontsource/lato";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/modal" element={<AddTaskModal />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
