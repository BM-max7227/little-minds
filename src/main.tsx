import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import heroHomePreload from "./assets/hero-home-hq.webp";
import "./index.css";

const heroPreload = document.createElement("link");
heroPreload.rel = "preload";
heroPreload.as = "image";
heroPreload.href = heroHomePreload;
(heroPreload as HTMLLinkElement & { fetchPriority?: string }).fetchPriority = "high";
document.head.appendChild(heroPreload);

createRoot(document.getElementById("root")!).render(<App />);
