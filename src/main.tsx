import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Intro from "./Intro.tsx";
import Contact from "./Contact.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Intro />
    <Contact />
  </StrictMode>
);
