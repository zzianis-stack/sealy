import{ useState } from "react";
import { Icon, SealMark } from "./icons";

export const navigation = [
    ["Home", "/"],
    ["Explore", "/explore"],
    ["Species Library", "/library"],
    ["Seal vs Sea Lion", "/compare"], //HMM Who would win in this contest ? :]
    ["Quiz", "/quiz"],
    ["About", "/about"],
] as const;

export default function Navbar({ path }: {path: string }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="nav-wrap container">
                <a className="brand" href="#/" aria-label="Sealy home">
                    <SealMark />
                    <span>
                        sealy<span className="brand-dot">.</span>
                    </span>
                </a>

                <button
                    className="menu-toggle icon-button"
                    aria-expanded={open}
                    aria-controls="main-navigation"
                    aria-label={open ? "Close navigation" : "Open Navigation"}
                    onClick={() => setOpen(!open)}>
                    
                    <Icon name={open ? "close" : "menu"} />
                </button>

                <nav
                    id="main-navigation"
                    className={open ? "navigation is-open": "navigation"}
                    aria-label="Main navigation"
                >
                    {navigation.map(([label, url]) => (
                        <a
                            key={url}
                            href={`#${url}`}
                            aria-current={
                                (url === "/" ? path === "/" : path.startsWith(url))
                                    ? "page"
                                    : undefined
                            }
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <a className="nav-cta" href="#/species">Get wet <Icon name="arrow" /></a>
            </div>
        </header>
    );
}