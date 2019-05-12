import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import ContainerDimensions from 'react-container-dimensions';
import { Route } from "react-router-dom";
import './App.css';
import { AppDrawer } from './AppDrawer';
import { CreateEvent } from './CreateEvent';
import { ManageView } from './ManageView';
import { FoodEventCarousel } from './FoodEventCarousel';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterUserPage } from './RegisterUserPage/RegisterUserPage';
import { TopNavBar } from './TopNavBar';
import { HistoryView } from './HistoryView';
import {ManageEvent} from './manage_event'

const drawerWidth = 240;
const foodEventsStr = localStorage.getItem('events');
const foodEvents = foodEventsStr ? JSON.parse(foodEventsStr) : [];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));


const App = (props) => {
  const { container } = props;
  const classes = useStyles();  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopNavBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <AppDrawer />
      </Drawer>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Route path="/dining" component={()=> {
          return (
            <div style={{width: '100%', height: '100%'}}>
              <ContainerDimensions>
                {({width, height})=>{
                  return <FoodEventCarousel width={width} height={height||584} foodEvents={foodEvents}/>
                }}
              </ContainerDimensions>
            </div>
          );
        }} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register-user" component={RegisterUserPage} />
        <Route path="/create-event" component={CreateEvent} />
        <Route path="/history" component={HistoryView} />
        <Route path="/manage" component={ManageEvent} />
      </div>
    </div>
  );
}

export default App;
