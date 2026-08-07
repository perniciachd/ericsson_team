import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css"; 

import router from "../Components/Router";
import {ThemeProvider} from "../Context/ThemeContext";
import { UserProvider } from "../Context/UserProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>  
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </UserProvider>
  </StrictMode>
);