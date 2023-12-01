import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage';
import FAQ from './pages/FAQ/FAQ';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import TutorialPage from './components/TutorialPage/TutorialPage';
import ShareSpoonfull from './pages/ShareSpoonfull/ShareSpoonfull';
import Navbar from './components/Navbar/Navbar';
import "@fontsource/lato";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

function App() {

  const maxSpoons = 12
  const [showSpoonsModal, setShowSpoonsModal] = useState(false);
  const [remainingSpoons, setRemainingSpoons] = useState(maxSpoons);
  const [usedSpoons, setUsedSpoons] = useState(0);
  const [plannedSpoons, setPlannedSpoons] = useState(0);
  const [taskList, setTaskList] = useState([]);

  return (
    <BrowserRouter>
      <Navbar
        showSpoonsModal={showSpoonsModal}
        setShowSpoonsModal={setShowSpoonsModal}
        remainingSpoons={remainingSpoons}
        setRemainingSpoons={setRemainingSpoons}
        usedSpoons={usedSpoons}
        setUsedSpoons={setUsedSpoons}
        plannedSpoons={plannedSpoons}
        setPlannedSpoons={setPlannedSpoons}
        maxSpoons={maxSpoons}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Routes>
        <Route path="/"
          element={<TasksPage
            taskList={taskList}
            setTaskList={setTaskList}
            remainingSpoons={remainingSpoons}
            maxSpoons={maxSpoons} />}
        />
        <Route path="/tutorial" element={<TutorialPage />}/>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/sharespoonfull" element={<ShareSpoonfull />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
