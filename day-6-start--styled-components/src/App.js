import "./App.css";
import { ThemeProvider } from "styled-components";
import PageHeading from "./components/headings/PageHeading";
import Container from "./components/layout/Container";
import Input from "./components/form/Input";
import Form from "./components/form/Form";
import Button, { DangerButton } from "./components/form/Button";
import GlobalStyle from "./styles/GlobalStyle";

const theme = {
  primaryColour: "#0D0A1F",
  secondaryColour: "#00FFFF",
  borderColour: "#FF00FF",
  dangerColour: "#ff2727",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <PageHeading>Register</PageHeading>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="City" colour="#dbc2cf" />
          <Button>Register</Button>
          <DangerButton>Cancel</DangerButton>
        </Form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
