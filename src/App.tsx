import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
