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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <img src={logo} style={{width: 72, height: 35 }} alt="spoonfull logo" />
          </Typography>
          </Link>
          <Button sx={{ color: "black" }} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;