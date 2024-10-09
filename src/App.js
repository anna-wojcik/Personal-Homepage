import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { themeLight, themeDark } from './theme';
import { useSelector } from 'react-redux';
import { selectIsDark } from './feature/themeSlice';
import PersonalHomepage from "./feature/PersonalHomepage";


function App() {
  const isDark = useSelector(selectIsDark);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
