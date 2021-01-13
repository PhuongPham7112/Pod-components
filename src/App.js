import logo from './logo.svg';
import './App.css';
import PodPost from './podPost/PodPost.js';
import Account from './account/Account.js';
import Notification from './pages/Notification.js';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

let mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff7d66'
    }
  },
  overrides: {
    MuiTypography: {
        root: {
            fontSize: 'calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)))'
        },
        body1: {
            fontSize: 'calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)))'
        }  
        
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Account/>
        <div style={{height: '10vh'}}/>
        <Notification/>
        <PodPost/>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
