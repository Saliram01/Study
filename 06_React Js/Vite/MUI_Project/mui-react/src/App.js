import './App.css';
import Form from './components/Form';
import { Typography } from '@mui/material';

function App() {
  return (<>
    <Typography
      variant='h2'
      sx={{ textAlign: 'center', boxShadow: '0 0 6px #848484', marginBottom: '25px' }}
    >
      Techinfo YT
    </Typography>
    <Form />
  </>);
}

export default App;