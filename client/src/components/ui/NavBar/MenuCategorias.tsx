import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TvIcon from '@mui/icons-material/Tv';
import ChairIcon from '@mui/icons-material/Chair';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MenuIcon from '@mui/icons-material/Menu';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useDispatch } from 'react-redux';
import {GETSEARCHBYCATEGORY} from  '../../../actions'
import { AppDispatch } from '../../../store';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {

  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch=useAppDispatch()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e:any) => {
    dispatch(GETSEARCHBYCATEGORY(e.target.innerText))
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
        sx={{bgcolor:'transparent',color:'common.white'}}
      >
        <MenuIcon/>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={(e)=>handleClose(e)}
      >
        <MenuItem onClick={(e)=>handleClose(e)} disableRipple>
          <TvIcon />
          Tecnologia
        </MenuItem>
        <MenuItem onClick={(e)=>handleClose(e)} disableRipple>
          <SportsBasketballIcon />
          Deporte
        </MenuItem>
        {/* <MenuItem onClick={(e)=>handleClose(e)} disableRipple>
          <ChairIcon />
          Muebles y Decoracion
        </MenuItem> */}
        <MenuItem onClick={(e)=>handleClose(e)} disableRipple>
          <CheckroomIcon />
          Ropa
        </MenuItem>
        <MenuItem onClick={(e)=>handleClose(e)} disableRipple>
          <VolunteerActivismIcon />
          Cuidado personal
        </MenuItem>
      </StyledMenu>
    </div>
  );
}