import { Container } from "./Container";
import Header from "./Header";
import ThemeSwitch from "./common/ThemeSwitch";

function App() {
  return (
    <Container>
      <ThemeSwitch />
      <Header />
    </Container>
  );
}

export default App;
