import { useUserContext } from '../UserProvider';
import { useNavigate } from 'react-router-dom';
import { Button,ListItem,ListItemAvatar,Avatar,ListItemText,Typography, Container } from '@mui/material';

function Summary(){
    const { user } = useUserContext();
    const navigate = useNavigate();
    const handleConfirm = () => {
        navigate('/users');
    };

    return (
        <Container maxWidth="sm">
          <h2>ÖZET</h2>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={user?.name}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user?.email}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Button variant='contained' onClick={handleConfirm}>Onayla</Button>
        </Container>
    );
}

export default Summary;
