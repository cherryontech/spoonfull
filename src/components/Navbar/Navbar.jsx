import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { createPortal } from "react-dom";
import { AppBar, Badge, Box, Toolbar, Typography, IconButton, useTheme, useMediaQuery, ListItem, Divider, List, Drawer, ListItemButton, ListItemIcon, styled } from '@mui/material'
import SpoonsModal from '../SpoonsModal/SpoonsModal';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/spoonfull-logo.svg";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import aboutUsIcon from "../../assets/about-us-icon.svg";
import faqIcon from "../../assets/faq-icon.svg";
import shareLinkIcon from "../../assets/share-link-icon.svg";
import copyrightIcon from "../../assets/copyright-icon.svg";

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
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"))
  const mediumScreen = useMediaQuery(theme.breakpoints.up("sm"))
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: <HomeIcon />,
      current: true
    },
    {
      name: 'About Us',
      href: 'aboutus',
      icon: <img src={aboutUsIcon} alt="about us" />,
      current: false
    },
    {
      name: 'Tutorial',
      href: 'tutorial',
      icon: <DirectionsWalkIcon />,
      current: false
    },
    {
      name: 'FAQ',
      href: 'faq',
      icon: <img src={faqIcon} alt="faq" />,
      current: false
    },
    {
      name: 'Share With Friends',
      icon: <img src={shareLinkIcon} alt="shareable link" />,
      href: 'sharespoonfull',
      current: false
    },
  ]

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

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="lg:px-16 md:pl-1 pr-6 pb-1 sm:pr-2 py-2" position="fixed" style={{ background: "background" }} elevation={0}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Link to='/'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, px: 2 }}>
                <img src={logo} style={{ width: 72, height: 35 }} alt="spoonfull logo" />
              </Typography>
            </Link>
            <button className="md: w-[46px] h-[49px]" onClick={() => { setShowSpoonsModal(true); }} sx={{ pt: 8, alignContent: 'center' }}>
              {remainingSpoons > 3 ? (
                <Badge badgeContent={remainingSpoons} sx={{ "& .MuiBadge-badge": { backgroundColor: "#23A1AF", color: "white" } }}>
                  <div className="pr-1.5 self-start">
                    <svg className="sm: w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.025 11.4492L3.68505 6.42088C3.46973 6.25033 3.29292 6.03615 3.16624 5.79241C3.03956 5.54868 2.96588 5.28091 2.95002 5.00667C2.93417 4.73244 2.97651 4.45796 3.07426 4.20125C3.17201 3.94455 3.32295 3.71142 3.51719 3.51719C3.71142 3.32295 3.94455 3.17201 4.20125 3.07426C4.45796 2.97651 4.73244 2.93417 5.00667 2.95002C5.28091 2.96588 5.54868 3.03956 5.79241 3.16624C6.03615 3.29292 6.25033 3.46973 6.42088 3.68505L11.4492 10.025C12.5384 9.54922 14.1992 9.48505 15.5984 10.8834C16.4442 11.7301 16.9709 12.765 17.1509 13.75C17.3259 14.7084 17.1917 15.7717 16.4817 16.4817C15.7725 17.1917 14.7084 17.3259 13.7509 17.1509C12.7659 16.9709 11.73 16.4442 10.8842 15.5975C9.48422 14.1984 9.54922 12.5384 10.025 11.4492Z" fill="#0F0129" />
                    </svg>
                  </div>
                </Badge>)
                :
                (<Badge badgeContent={remainingSpoons} sx={{ "& .MuiBadge-badge": { backgroundColor: "#F7559E", color: "white" } }} showZero>
                  <div className="pr-1.5">
                    <svg className="sm: w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.025 11.4492L3.68505 6.42088C3.46973 6.25033 3.29292 6.03615 3.16624 5.79241C3.03956 5.54868 2.96588 5.28091 2.95002 5.00667C2.93417 4.73244 2.97651 4.45796 3.07426 4.20125C3.17201 3.94455 3.32295 3.71142 3.51719 3.51719C3.71142 3.32295 3.94455 3.17201 4.20125 3.07426C4.45796 2.97651 4.73244 2.93417 5.00667 2.95002C5.28091 2.96588 5.54868 3.03956 5.79241 3.16624C6.03615 3.29292 6.25033 3.46973 6.42088 3.68505L11.4492 10.025C12.5384 9.54922 14.1992 9.48505 15.5984 10.8834C16.4442 11.7301 16.9709 12.765 17.1509 13.75C17.3259 14.7084 17.1917 15.7717 16.4817 16.4817C15.7725 17.1917 14.7084 17.3259 13.7509 17.1509C12.7659 16.9709 11.73 16.4442 10.8842 15.5975C9.48422 14.1984 9.54922 12.5384 10.025 11.4492Z" fill="#0F0129" />
                    </svg>
                  </div>
                </Badge>)}
              <p className="text-caption text-text">Spoons</p>
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
        <Offset />
      </Box>
      <Drawer
        PaperProps={
          largeScreen ? {
            sx: {
              backgroundColor: '#E8D7DF',
              width: 440,
              pb: 2,
              pt: 3,
              px: 3,
            }
          }
            :
            mediumScreen ? {
              sx: {
                backgroundColor: '#E8D7DF',
                width: 360,
                pb: 2,
                pt: 3,
                px: 2,
              }
            }
              :
              {
                sx: {
                  backgroundColor: '#E8D7DF',
                  width: 280,
                  pb: 2,
                  pt: 3,
                  pl: 1,
                }
              }
        }
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        style={{ bgcolor: "accent3" }}
        variant="temporary"
        anchor="left"
        onClose={() => {
          handleDrawerClose()
        }}
        open={open}
      >
        <div className="flex flex-col flex-1 items-start">
          <h4 className="text-header4 p-2 indent-4">Menu</h4>
          <Divider flexItem variant="middle" />
          <List >
            {navigation.map((item) => {
              return (
                  <ListItemButton
                    key={item.name}
                    to={item.href}>
                    <ListItemIcon sx={{ mr: -3 }} style={{ color: "#001111" }}> {item.icon} </ListItemIcon>
                    {item.name}
                  </ListItemButton>
              )
            })}
          </List>
        </div>
        <footer className="px-4 flex justify-end">
          <img src={copyrightIcon} alt="copyright symbol" />
          {mediumScreen ? <p className="pl-2 text-text1 text-body">SpoonFull, all rights reserved</p>
            :
            <p className="pl-2 text-text1 text-caption">SpoonFull, all rights reserved</p>
          }
        </footer>
      </Drawer>
    </div>
  );
}

export default Navbar;