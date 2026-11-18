import { Icon } from "./icons";
import { WildlifeImage } from "./image";
export default function Hero() {
    return(
        <section className="hero" aria-labelledby="hero-title">
            <WildlifeImage 
                src={`${import.meta.env.BASE_URL}imgs/hero/grey-seal-halichoerus-gyrups.jpg`}
                alt="Easter Egg :]"
                className="hero-photo"
            />
            <div className="hero-shade" />
            <div className="hero-inner container">
                <div className="hero-copy">
                    <span className="eyebrow light">
                        <span className="tiny-line" /> CURIOUS BY NATURE
                    </span>
                    <h1 id="hero-title">
                        An ocean of
                        <br />
                        <em>discovery.</em>
                    </h1>
                    <p>
                        Big personalities. Remarkable lives.
                        <br className="desktop-break" /> Get closer to the universe of seals and sea lions :3
                    </p>
                    <div className="button-row">
                        <a href="#/species" className="button button-cream">
                            Meet <Icon name="arrow" />
                        </a>
                        <a href="#/compare" className="hero-secondary">
                            Seal or sea lion? Who is the goat <Icon name="arrow" className="diagonal" />
                        </a>
                    </div>
                    <div className="hero-note">
                        <span className="live-dot" /> A guide for the unmatched curious
                    </div>
                </div>
                <div className="hero-caption">
                    <span>IM GOOD COMPANY</span>
                    <p>Grey seal</p>
                    <i>Halichoerus Gyrups</i>
                </div>
            </div>
            <div className="hero-bottom">
                <span>EXPLORE A LIL. DISCOVER A LOT</span>
                <Icon name="arrow" className="down" />
            </div>
        </section>
    )
}

