import "./App.css";
import "@styles/themes/light.css.ts";
import { HeaderControlWindow } from "@/components/HeaderControlWindow";
import { Header } from "@/components/Header";

function App() {
  return (
    <>
      <HeaderControlWindow />
      <Header />
    </>
  );
}

export default App;
