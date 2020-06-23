import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ComputerIcon from '@material-ui/icons/Computer';
import { Link } from "react-router-dom";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import './NavBar.scss';


const NavBar = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const NavBarContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled.div`
  font-size: 1.2rem;
  color: #fff;
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
`

const NavLink = styled.li`
  font-size: .9rem;
  font-weight: 500;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s linear;
  line-height: 2rem;

  &:hover {
    background-color: #00477d;
  }
`

const Index = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeChange = () => {
    let path = `/`;
    props.history.push(path);
  };

  return (
    <div>
    <NavBar>
      <NavBarContainer>
        <Brand onClick={routeChange}>React Digital Experience</Brand>
        <NavLinks>
          <NavLink>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu-1 <ArrowDropDownIcon fontSize="default" className="caret-icon" />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link className="menu-link" to="/"><MenuItem onClick={handleClose}><DashboardIcon fontSize="large" className="menu-icon" />Dashboard</MenuItem></Link>
                <Link className="menu-link" to="/customer"><MenuItem onClick={handleClose}><PeopleIcon fontSize="large" className="menu-icon" />Customers</MenuItem></Link>
                <Link className="menu-link" to="/form"><MenuItem onClick={handleClose}><FormatListBulletedIcon fontSize="large" className="menu-icon" />Form</MenuItem></Link>
                <Link className="menu-link" to="/sitemap"><MenuItem onClick={handleClose}><ComputerIcon fontSize="large" className="menu-icon" />SiteMap</MenuItem></Link>
              </Menu>
          </NavLink>
          <NavLink>Menu-2</NavLink>
          <NavLink>
            <Grid item xs={8} >
              <PowerSettingsNewIcon fontSize="default" />
            </Grid>
          </NavLink>
        </NavLinks>
      </NavBarContainer>
    </NavBar>
    </div>
  );
}

export default Index
