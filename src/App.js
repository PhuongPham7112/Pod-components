import './App.css';
import PodPost from './podPlayer/PodPlayer.js';
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
      main: '#ffb300',
      light: '#617fec'
    },
    info: {
      main: '#617fec'
    }
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: 'calc(11px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));'
      },
      body4: {
        fontSize: 'calc(9px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));'
      },
      subtitle1: {
        fontSize: 'calc(8px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));'
      }

    }
  }
})

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
    <div className="App">
      <body>
        <Account/>
        <div style={{height: '10vh'}}/>
        <Notification/>
        <div style={{height: '10vh'}}/>
        <Library/>
        <div style={{height: '10vh'}}/>
        <PodPost/>
      </body>
    </div>
    </ThemeProvider>
  );
}

export default App;
