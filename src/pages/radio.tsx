import RadioPlayer from "../comps/radio-player"
import { radioArtist } from "../data/radio"

export default function Radio() {
    return (
        <div className="radio-page">
            <div className="radio-intro">
                <p className="radio-label">WELCOME TO THE UNDERWATER STATION</p>
                <h1>Sealy FM.</h1>
                <p className="raiod-subtitle">
                    The ocean has terrible music taste.
                </p>
                <p>
                    Someone actually decided to make music using sea lion
                    noises. And somehow, it absolutely slaps.
                </p>
                <p>
                    Naturally, I HAD to give it a place on Sealy.
                    Welcome aboard, I guess.
                </p>
            </div>

            <RadioPlayer />
            <section className="radio-credits">
                <p className="radio-label">ARTIST CREDITS</p>
                <h2>The mastermind behind the honking.</h2>
                <p>
                    All the music featured here belongs to {radioArtist.name}.
                    I made the website, but this mo.. guy made sea lions into
                    actual musicians. Diffrent lvls of dedication.
                </p>
                <p>
                    Sealy is not affiliated with the artist.
                    Music is played through Sealy's official player.
                </p>
            </section>
        </div>
    )
}