import { useUserContext } from "../UserProvider";
import { Container,ListItem,ListItemAvatar,Avatar,ListItemText,Typography } from "@mui/material";

export default function Users() {
  const {user} = useUserContext();
  return (
    <Container maxWidth="sm">
      {user ?
          <>        
            <h2>User</h2>
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
                      <br />
                      {user?.phone}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </> :
          <>
            <h2>Kullanıcı Oluşturulmadı.</h2>
          </>
      }
    </Container>
  )
}
