import {AppBar,ButtonGroup,Button,Toolbar,Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';


export default function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Context API & Routing
                </Typography>
                <ButtonGroup variant='contained' color='warning'>
                  <Button>
                    <NavLink to="/" className={({isActive}) => {
                      return isActive ? 'color-b' : ""
                    }}>
                      Home
                    </NavLink>
                  </Button>
                  <Button>
                    <NavLink to="/login-informations" className={({isActive}) => {
                      return isActive ? 'color-b' : ""
                    }}>
                      Giriş Bilgileri
                    </NavLink>
                  </Button>
                  <Button>
                    <NavLink to="/users" className={({isActive}) => {
                      return isActive ? 'color-b' : ""
                    }}>
                      Kullanıcılar
                    </NavLink>
                  </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
  )
}