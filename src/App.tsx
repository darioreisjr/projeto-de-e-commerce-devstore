import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

