<h1 align="center">
<br>
<img src=https://raw.githubusercontent.com/cherryontech/spoonfull/64424bdae39f8dc955b497e0d3b1b51c4942d3eb/src/assets/spoonfull-logo.svg alt="SpoonFull logo" width="200">
</h1>

# SpoonFull
[![Netlify Status](https://api.netlify.com/api/v1/badges/8716e697-002f-447c-aa13-6f01dd4beae1/deploy-status)](https://app.netlify.com/sites/spoonfull-kiwi-kick/deploys)

According to the World Health Organization (WHO), burnout is officially recognized as a syndrome resulting from chronic workplace stress that hasn't been effectively managed. Our team's solution - SpoonFull! Inspired by the Spoon Theory, SpoonFull is a holistic solution to burnout that revolutionizes task planning by considering the user's energy level. Check it out here: [SpoonFull](https://spoonfull-kiwi-kick.netlify.app/)

## Table of Contents

- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [About the Team](#about-the-team)

## Tech Stack :

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,html,css,react,vite,tailwind,materialui&perline=7" alt="Icons for the following skills: Javascript, HTML, CSS, React, Vite,Tailwind, MaterialUI" />
  </a>
</p>
<br>
Additional libraries used:

- [Chart.Js](https://www.chartjs.org)
- [Toastify](https://github.com/fkhadra/react-toastify#readme)
- [HeadlessUI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)

## How It Works: 

After reviewing the initial tutorial screens, the user is able to click on the "Add Task" button on the bottom of the screen to add a task.

Once the button is clicked, the user is presented with a modal that allows them to name their task, select how many spoons (or energy units) this task will take to complete, and select the task's priority. 

Tasks are then stored in the user's local storage and sorted by priority, although the user can always edit their tasks' name, spoons assigned, or priority. If no priority is selected, the task is sorted into the "Low Priority" column.  

Once the task is completed, the user can mark a task as done by clicking on the check box next to the task. Alternatively, the user can also delete a task by clicking on the three-dot icon on the right of the task, or by  swiping to delete on tablet and mobile.   

Users can always review their allotment of spoons as a whole by clicking on the "Spoons" button on the top right corner of the screen. Here they will see a chart that depicts how many spoons have been used, are planned, and are available. 

Feel free to watch our team presentation video on SpoonFull by clicking on the image below. Throughout the video we discuss our design and tech processes, user and usability testing insights, and give a live demo of our site.

 [![Thumbnail for the SpoonFull: Revolutionizing Wellness with Task Planning Magic! ](https://img.youtube.com/vi/Y6kspIcCRoQ/0.jpg)](https://www.youtube.com/watch?v=Y6kspIcCRoQ)

## Installation:

1. Clone or download the repository.
   ```bash
    git clone git@github.com:cherryontech/spoonfull.git
    ```


2. To set-up the front-end, install the dependencies needed by running `npm install` from inside the spoonfull directory.
   ```bash    
   $ cd spoonfull
   $ npm install
   ```
3. Start the React app:
    ```bash
    $ npm run dev
    ```

## About the Team

SpoonFull was created by the Kiwi Kick tech squad under the Cherry on Tech program. Read more about us [here](https://spoonfull-kiwi-kick.netlify.app/aboutus_) on our site and feel free to leave us any comments, questions, or feedback at kiwi.kick.project@gmail.com.

 Thank you for checking out SpoonFull!   