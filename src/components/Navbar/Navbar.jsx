import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { createPortal } from "react-dom";
import { AppBar, Badge, useTheme, useMediaQuery, ListItem, Divider, List, Drawer, ListItemButton, ListItemIcon } from '@mui/material'
import SpoonsModal from '../SpoonsModal/SpoonsModal';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/spoonfull-logo.svg";
import HomeIcon from '@mui/icons-material/Home';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import aboutUsIcon from "../../assets/about-us-icon.svg";
import faqIcon from "../../assets/faq-icon.svg";
import shareLinkIcon from "../../assets/share-link-icon.svg";

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
      icon: <img src={aboutUsIcon} />,
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
      icon: <img src={faqIcon} />,
      current: false
    },
    {
      name: 'Share With Friends',
      icon: <img src={shareLinkIcon} />,
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

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"))
  const mediumScreen = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "background" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
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
        <div className="felx flex-col flex-1 items-start">
          <h4 className="text-header4 p-2 indent-4">Menu</h4>
          <Divider variant="middle" />
          <List >
            {navigation.map((item) => {
              return (
                <ListItem>
                  <ListItemButton
                    key={item.name}
                    to={item.href}>
                    <ListItemIcon sx={{ mr: -3 }} style={{ color: "#001111" }}> {item.icon} </ListItemIcon>
                    {item.name}
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </div>
        <footer className="px-4 flex justify-end">
          <svg className="self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_1455_9560)">
              <path d="M1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.146 4.992C6.934 4.992 6.219 5.912 6.219 7.494V8.554C6.219 10.125 6.922 11.016 8.146 11.016C9.125 11.016 9.787 10.43 9.875 9.598H11.17V9.691C11.07 11.139 9.816 12.158 8.14 12.158C6.049 12.158 4.871 10.822 4.871 8.555V7.482C4.871 5.221 6.072 3.844 8.141 3.844C9.822 3.844 11.076 4.898 11.17 6.416V6.504H9.875C9.787 5.625 9.107 4.992 8.146 4.992Z" fill="#3A3A3A" />
            </g>
            <defs>
              <clipPath id="clip0_1455_9560">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
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