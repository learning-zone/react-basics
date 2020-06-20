import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './NavBar.scss';


const NavBar = styled.header`
  width: 100%;
  height: 7rem;
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
  font-size: 2rem;
  color: #fff;
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
`

const NavLink = styled.li`
  font-size: 1.5rem;
  color: #fff;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s linear;
  line-height: 3rem;

  &:hover {
    background-color: #00477d;
  }
`

const Index = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <NavBar>
      <NavBarContainer>
        <Brand>React Digital Experience</Brand>
        <NavLinks>
          <NavLink>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu-1 <ArrowDropDownIcon fontSize="large" className="caret-icon" />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><DashboardIcon fontSize="large" className="menu-icon" /> Dashboard</MenuItem>
                <MenuItem onClick={handleClose}><PeopleIcon fontSize="large" className="menu-icon" /> Customers</MenuItem>
                <MenuItem onClick={handleClose}><BarChartIcon fontSize="large" className="menu-icon" /> Reports</MenuItem>
              </Menu>
          </NavLink>
          <NavLink>Menu-2</NavLink>
          <NavLink>
            <Grid item xs={8} >
              <PowerSettingsNewIcon fontSize="large" />
            </Grid>
          </NavLink>
        </NavLinks>
      </NavBarContainer>
    </NavBar>
    </div>
  );
}

export default Index
