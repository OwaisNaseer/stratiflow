import Home from "./pages/home";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
function App() {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}

export default App;
