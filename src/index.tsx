import App from "components/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
