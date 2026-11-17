import { announcements } from "../data/education";
import { useEffect, useState } from "react";
import { Icon } from "./icons";

export default function AnnouncementBar() { 
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => {
            if(media.matches) setPaused(true);
        };
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);
    useEffect(() => {
        if(paused) return;
        const timer = window.setInterval(
            () => setIndex((current) => (current + 1) % announcements.length),
            7000,
        );
        return () => window.clearInterval(timer);
    }, [paused]);
    return (
        <aside className="annoucement" aria-label="Announcement">
            <div className="annoucement-insides">
                <span className="fact-label">
                    <Icon name="spark" /> LIL OCEAN KNOWLEDGE
                </span>
                <p key={index}>{announcements[index]}</p>
            </div>
        </aside>
    )
}

//Future plans, add a control menu that allows for control of resume pause and change message.

//Used ai here to debug the import of Icons, to realise that I didnt have react installed..