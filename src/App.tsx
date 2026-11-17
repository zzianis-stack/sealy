import AnnouncementBar from './comps/announcemnt';
import Navbar from "./comps/navbar";
import { useRoute } from "./hooks/use-route";
import './App.css';

export default function App() {
  const path = useRoute();
  let content;
  return (
    <>
      <AnnouncementBar />
      <Navbar path={path} />
      <main id="main-content">{content}</main>
    </>
  );
}
