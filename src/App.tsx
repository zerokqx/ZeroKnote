import "./App.css";
import "@mantine/core/styles.css";

import { HeaderControlWindow } from "@/components/HeaderControlWindow";
import { Header } from "@/components/Header";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/styles/themes/theme.ts";

function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <HeaderControlWindow />
        <Header />
      </MantineProvider>
    </>
  );
}

export default App;
