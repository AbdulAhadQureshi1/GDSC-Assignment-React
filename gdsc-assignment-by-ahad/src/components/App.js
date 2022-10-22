import '../App.css'
import Content from './Content';
import Navbar from './navbar.js'
import ThemeProvider from './themeContext.js'

function App() {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      <Content></Content>
    </ThemeProvider>
  );
}

export default App;
