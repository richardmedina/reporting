import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const UserSession = ({ user } ) => {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div style={{ display: 'flex'}}>
          <div style={{ flex: '1 0'}}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.primary" gutterBottom>
              {user.fullName}
            </Typography>

            <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined" size='small'>
              <InputLabel htmlFor="outlined-adornment-password">Search @ Work</InputLabel>
              <OutlinedInput
                id="search_textfield"
                type="text"
                //value={values.password}
                //onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="search"
                      //onClick={handleClickShowPassword}
                      //onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                     <Search></Search>
                    </IconButton>
                  </InputAdornment>
                }
                label="Search @ Work"
              />
            </FormControl>

          </div>
          <div style={{ flex: '0 0 200px'}}>
            <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
              Session Timeout: 30:00
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="primary.main" gutterBottom>
              United States
            </Typography>

            <Typography sx={{ fontSize: 12 }} color="primary.main" gutterBottom>
              English | Spanish
            </Typography>
          </div>
        </div>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

UserSession.defaultProps = {
  user: {
    fullName: 'Liz Tam'
  }
}

export default UserSession;


