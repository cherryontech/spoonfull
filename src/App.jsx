import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage/TasksPage";
import FAQ from "./pages/FAQ/FAQ";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import TutorialPage from "./components/TutorialPage/TutorialPage";
import ShareSpoonfull from "./pages/ShareSpoonfull/ShareSpoonfull";
import Navbar from "./components/Navbar/Navbar";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import "@fontsource/lato";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import { useLocalStorage } from "./utils/hooks/useLocalStorage";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";

function App() {
  const maxSpoons = 12;
  const [showSpoonsModal, setShowSpoonsModal] = useState(false);
  const [remainingSpoons, setRemainingSpoons] = useState(maxSpoons);
  const [usedSpoons, setUsedSpoons] = useState(0);
  const [plannedSpoons, setPlannedSpoons] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [taskAdded, setTaskAdded] = useState(false);
  const [taskRemoved, setTaskRemoved] = useState(false);
  const [taskEdited, setTaskEdited] = useState(false);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  const [noPriorityTasks, setNoPriorityTasks] = useState([]);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [showTutorialPage, setShowTutorialPage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!localStorage["tasks"]) {
      localStorage["tasks"] = "[]";
    }

    let tasks = localStorage["tasks"];
    tasks = JSON.parse(tasks);
    tasks = tasks.sort((a, b) => a.id - b.id);
    setTaskList(tasks);

    let highPriority = tasks.filter((task) => task.priority === "High");
    setHighPriorityTasks(highPriority);

    let mediumPriority = tasks.filter((task) => task.priority === "Medium");
    setMediumPriorityTasks(mediumPriority);

    let lowPriority = tasks.filter((task) => task.priority === "Low");
    setLowPriorityTasks(lowPriority);

    let noPriority = tasks.filter((task) => task.priority === "Priority");
    setNoPriorityTasks(noPriority);
  }, [taskAdded, taskRemoved, taskEdited]);

  useEffect(() => {
    if (!localStorage["tutorial"]) {
      localStorage["tutorial"] = "true";
    }

    let tutorial = localStorage["tutorial"];
    tutorial = JSON.parse(tutorial);
    setShowWelcomePage(tutorial);
  }, []);

  const isLoggedIn = useLocalStorage("isLoggenIn").getItem();

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
        showWelcomePage={showWelcomePage}
        showTutorialPage={showTutorialPage}
        isModalOpen={isModalOpen}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <TasksPage
                taskList={taskList}
                setTaskList={setTaskList}
                remainingSpoons={remainingSpoons}
                setRemainingSpoons={setRemainingSpoons}
                maxSpoons={maxSpoons}
                taskAdded={taskAdded}
                setTaskAdded={setTaskAdded}
                taskRemoved={taskRemoved}
                setTaskRemoved={setTaskRemoved}
                taskEdited={taskEdited}
                setTaskEdited={setTaskEdited}
                highPriorityTasks={highPriorityTasks}
                mediumPriorityTasks={mediumPriorityTasks}
                lowPriorityTasks={lowPriorityTasks}
                noPriorityTasks={noPriorityTasks}
                showWelcomePage={showWelcomePage}
                setShowWelcomePage={setShowWelcomePage}
                showTutorialPage={showTutorialPage}
                setShowTutorialPage={setShowTutorialPage}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            ) : (
              <WelcomeScreen />
            )
          }
        />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/sharespoonfull" element={<ShareSpoonfull />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
