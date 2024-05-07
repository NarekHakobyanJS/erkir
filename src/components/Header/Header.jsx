import React from 'react'
import { countriesAPI } from '../../api/api';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header({dispatch}) {

    const region = ['Africa', 'Europe', 'Americas', 'Asia', 'Oceania']

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <div>
                <button onClick={() => countriesAPI.getAll(dispatch)}>all</button>
                {
                    region.map((reg) => {
                        return (
                            <Button
                                key={reg}
                                color='secondary'
                                variant='contained'
                                onClick={() => countriesAPI.getRegion(dispatch, reg)}>{reg}
                            </Button>
                        )
                    })
                }
            </div>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// const Header = ({ dispatch }) => {
//     const region = ['Africa', 'Europe', 'Americas', 'Asia', 'Oceania']
//     return (
//         <div>
//             <AppBar>
//             <Toolbar>

//             </Toolbar>
//             </AppBar>
//             <div>
//                 <button onClick={() => countriesAPI.getAll(dispatch)}>all</button>
//                 {
//                     region.map((reg) => {
//                         return (
//                             <button
//                                 key={reg}
//                                 onClick={() => countriesAPI.getRegion(dispatch, reg)}>{reg}
//                             </button>
//                         )
//                     })
//                 }
//             </div>

//             <div>
//                 <input />
//             </div>
//         </div>
//     )
// }

export default Header