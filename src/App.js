import logo from './logo.svg';
import './App.css';
import PodPost from './podPost/PodPost.js';
import Account from './account/Account.js';
import Notification from './pages/Notification.js';
import Library from './pages/Library.js';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

let mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff7d66'
    },
    secondary: {
      main: '#ffb300'
    }
  },
  overrides: {
    MuiTypography: {
        root: {
            fontSize: 'calc(12px + (20 - 10) * ((100vw - 300px) / (1600 - 300)))'
        },
        body1: {
            fontSize: 'calc(12px + (20 - 10) * ((100vw - 300px) / (1600 - 300)))'
        },
        h3: {
            fontSize: 'calc(12px + (20 - 10) * ((100vw - 300px) / (1600 - 300)))'
        }  
        
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
    <div className="App">
      <main>
        <Account/>
        <div style={{height: '10vh'}}/>
        <Notification/>
        <div style={{height: '10vh'}}/>
        <Library/>
        <div style={{height: '10vh'}}/>
        <PodPost/>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
