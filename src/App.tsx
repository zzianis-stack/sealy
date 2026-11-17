import AnnouncementBar from './comps/announcemnt';
import './App.css';

export default function App() {
  let content;
  return (
    <>
      <AnnouncementBar />
      <main id="main-content">{content}</main>
    </>
  );
}
