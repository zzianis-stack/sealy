import AnnouncementBar from './comps/announcemnt';
import Navbar from "./comps/navbar";
import Home from "./pages/home";
import Radio from "./pages/radio";
import { useRoute } from "./hooks/use-route";
import './App.css';

export default function App() {
  const path = useRoute();

  return (
    <>
      <AnnouncementBar />
      <Navbar path={path} />

      <main id="main-content">
        {path === "/" ? (
          <Home /> 
        ): path === "/radio" ? (
          <Radio />
        ):(
          <section className="container page-section">
            <h1>More seals SOON!</h1>
            <p>This part of the ocean is still being explored.</p>
          </section>
        )}
      </main>
    </>
  );
}
