import { Fragment } from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { createPortal } from "react-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Badge, useTheme, styled } from '@mui/material'
import SpoonsModal from '../SpoonsModal/SpoonsModal';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/spoonfull-logo.svg";

const Navbar = ({
  taskList,
  maxSpoons,
  setShowSpoonsModal,
  showSpoonsModal,
  remainingSpoons,
  setRemainingSpoons,
  usedSpoons,
  setUsedSpoons,
  plannedSpoons,
  setPlannedSpoons, }) => {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  //   {
  //     name: 'Home',
  //     href: '/',
  //     current: true
  //   },
  //   {
  //     name: 'Team',
  //     href: '#',
  //     current: false
  //   },
  //   {
  //     name: 'Projects',
  //     href: '#',
  //     current: false
  //   },
  //   {
  //     name: 'Calendar',
  //     href: '#',
  //     current: false
  //   },
  // ]

  // function classNames(...classes) {
  //   ``
  //   return classes.filter(Boolean).join(' ')
  // }

  useEffect(() => {
    const spoonCount = (arr) => {

      const checkedArray = [];
      arr.map(task => {
        if (task.checked === true) {
          return checkedArray.push(task.spoons)
        }
      })
      const used = checkedArray.reduce((accumulator, spoon) => accumulator + spoon, 0);

      const spoonArray = [];
      arr.map(task => {
        return spoonArray.push(task.spoons);
      })
      const totalSpoons = spoonArray.reduce((accumulator, currentSpoon) => accumulator + currentSpoon, 0);

      setUsedSpoons(used)
      setPlannedSpoons(totalSpoons - used)
      setRemainingSpoons(maxSpoons - totalSpoons)
    }

    spoonCount(taskList);

  }, [taskList])

  const DrawerHeader = styled('div')((({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.padding(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  })))

  const drawerWidth = 241

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "background" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} style={{ width: 72, height: 35 }} alt="spoonfull logo" />
            </Typography>
          </Link>
          <button onClick={() => { setShowSpoonsModal(true); }}>
            {remainingSpoons > 3 ? (
              <Badge badgeContent={remainingSpoons} sx={{ "& .MuiBadge-badge": { backgroundColor: "#23A1AF", color: "white" } }}>
                <div className="pr-1.5 self-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.025 11.4492L3.68505 6.42088C3.46973 6.25033 3.29292 6.03615 3.16624 5.79241C3.03956 5.54868 2.96588 5.28091 2.95002 5.00667C2.93417 4.73244 2.97651 4.45796 3.07426 4.20125C3.17201 3.94455 3.32295 3.71142 3.51719 3.51719C3.71142 3.32295 3.94455 3.17201 4.20125 3.07426C4.45796 2.97651 4.73244 2.93417 5.00667 2.95002C5.28091 2.96588 5.54868 3.03956 5.79241 3.16624C6.03615 3.29292 6.25033 3.46973 6.42088 3.68505L11.4492 10.025C12.5384 9.54922 14.1992 9.48505 15.5984 10.8834C16.4442 11.7301 16.9709 12.765 17.1509 13.75C17.3259 14.7084 17.1917 15.7717 16.4817 16.4817C15.7725 17.1917 14.7084 17.3259 13.7509 17.1509C12.7659 16.9709 11.73 16.4442 10.8842 15.5975C9.48422 14.1984 9.54922 12.5384 10.025 11.4492Z" fill="#0F0129" />
                  </svg>
                </div>
              </Badge>)
              :
              (<Badge badgeContent={remainingSpoons} sx={{ "& .MuiBadge-badge": { backgroundColor: "#F7559E", color: "white" } }} showZero>
                <div className="pr-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.025 11.4492L3.68505 6.42088C3.46973 6.25033 3.29292 6.03615 3.16624 5.79241C3.03956 5.54868 2.96588 5.28091 2.95002 5.00667C2.93417 4.73244 2.97651 4.45796 3.07426 4.20125C3.17201 3.94455 3.32295 3.71142 3.51719 3.51719C3.71142 3.32295 3.94455 3.17201 4.20125 3.07426C4.45796 2.97651 4.73244 2.93417 5.00667 2.95002C5.28091 2.96588 5.54868 3.03956 5.79241 3.16624C6.03615 3.29292 6.25033 3.46973 6.42088 3.68505L11.4492 10.025C12.5384 9.54922 14.1992 9.48505 15.5984 10.8834C16.4442 11.7301 16.9709 12.765 17.1509 13.75C17.3259 14.7084 17.1917 15.7717 16.4817 16.4817C15.7725 17.1917 14.7084 17.3259 13.7509 17.1509C12.7659 16.9709 11.73 16.4442 10.8842 15.5975C9.48422 14.1984 9.54922 12.5384 10.025 11.4492Z" fill="#0F0129" />
                  </svg>
                </div>
              </Badge>)}
            <p className="text-caption">Spoons</p>
          </button>
          {showSpoonsModal && createPortal(
            <SpoonsModal
              setShowSpoonsModal={setShowSpoonsModal}
              remainingSpoons={remainingSpoons}
              usedSpoons={usedSpoons}
              plannedSpoons={plannedSpoons}
            />,
            document.body
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;