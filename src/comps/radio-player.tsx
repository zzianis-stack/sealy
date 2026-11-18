import { useRef, useState } from "react";
import { radioTracks } from "../data/radio";

export default function RadioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const pendingPlay = useRef(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [error, setError] = useState("");

    const currentTrack = radioTracks[currentIndex];

    function togglePlay() {
        const audio = audioRef.current;

        if(!audio) return;
        if (audio.paused) {
            setError("");
            audio.play().catch(() => {
                setError("Can't start the track. Try Play again.");
            });
        } else {
            audio.pause();
        }
    }

    function selectTrack(index: number) {
        if(index === currentIndex) {
            if (!isPlaying) togglePlay();
            return;
        }
        pendingPlay.current = true;

        setCurrentIndex(index);
        setCurrentTime(0);
        setDuration(0);
        setError("");
    }

    function nextTrack() {
        const next = (currentIndex + 1) % radioTracks.length;
        selectTrack(next);
       //setCurrentIndex((currentIndex + 1) % radioTracks.length);
    }
    function previousTrack() {
        const previous = (currentIndex - 1 + radioTracks.length) % radioTracks.length;
        selectTrack(previous);
        //setCurrentIndex((currentIndex - 1 + radioTracks.length) % radioTracks.length);
    }

    function handleCanPlay() {
        if(!pendingPlay.current) return;
        pendingPlay.current = false;
        audioRef.current?.play().catch(() => {
            setError("Press Play to start.");
        });
    }

    function seekTo(seconds: number) {
        if(!audioRef.current) return;

        audioRef.current.currentTime = seconds;
        setCurrentTime(seconds);
    }

    function changeVolume(value: number) {
        setVolume(value);
        if(audioRef.current) {
            audioRef.current.volume = value;
        }
    }

    function formatTime(seconds: number) {
        if(!Number.isFinite(seconds)) return "0:00";

        const minutes = Math.floor(seconds/60);
        const remaining = Math.floor(seconds%60);

        return `${minutes}:${String(remaining).padStart(2, "0")}`;
    }

    return (
        <div className="radio-layout">
            <section className="radio-player">
                <p className="radio-label">
                    SEALY FM / BROADCASTING FROM SOMEWHERE UDNERWATER
                </p>

                <h2>{currentTrack.title}</h2>
                <p className="radio-artist">{currentTrack.artist}</p>

                <audio
                    ref={audioRef}
                    src={`${import.meta.env.BASE_URL}music/${currentTrack.file}`}
                    preload="metadata"
                    onCanPlay={handleCanPlay}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={(event) => {
                        setCurrentTime(event.currentTarget.currentTime);
                    }}
                    onLoadedMetadata={(event) => {
                        const seconds=event.currentTarget.duration;

                        setDuration(
                            Number.isFinite(seconds) ? seconds : 0
                        );
                    }}
                    onEnded={nextTrack}
                    onError={() => {
                        pendingPlay.current = false;
                        setIsPlaying(false);
                        setError("Audio file not found or couldn't be played.");
                    }}
                />

                <div className="radio-seek">
                    <span>{formatTime(currentTime)}</span>

                    <input 
                        type="range"
                        min="0"
                        max={duration || 1}
                        step="0.1"
                        value={Math.min(currentTime, duration || 1)}
                        disabled={duration === 0}
                        aria-label="Song progress"
                        onChange={(event) => {
                            seekTo(Number(event.target.value));
                        }}
                    />

                    <span>{formatTime(duration)}</span>
                </div>

                <div className="radio-controls">
                    <button
                        type="button"
                        onClick={previousTrack}
                        aria-label="Previous track"
                    >
                        - Previous
                    </button>

                    <button
                        type="button"
                        className="radio-play-button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause" : "▶ Play"}
                    >
                        {isPlaying ? "II Pause":"▶ Play"}
                    </button>

                    <button 
                        type="button"
                        onClick={nextTrack}
                        aria-label="Next track"
                    >
                        Next -
                    </button>
                </div>

                <div className="radio-volume">
                    <span>Volume</span>
                    <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        aria-label="Volume"
                        onChange={(event) => {
                            changeVolume(Number(event.target.value));
                        }}
                    />

                    <span>{Math.round(volume * 100)}%</span>
                </div>

                <p className="radio-help">
                    {isPlaying
                        ? "ON AIR - The seals are listening."
                        : "OFF AIR - The seals are waiting."}
                </p>

                {error && <p className="radio-error" role="alert">{error}</p>}
            </section>

            <section className="radio-playlist">
                <h2>The Flipper Playlist</h2>
                <p>Handpicked by absolutely nobody qualified.</p>

                <ol>
                    {radioTracks.map((track, index) => (
                        <li key={track.id}>
                            <button
                                type="button"
                                className={
                                    currentIndex === index
                                    ? "radio-song active"
                                    : "radio-song"
                                }
                                onClick={() => selectTrack(index)}
                                aria-current={
                                    currentIndex === index
                                    ? "true"
                                    : undefined
                                }
                            >
                                <span className="radio-song-number">
                                    {index + 1}
                                </span>

                                <span className="radio-song-info">
                                    <strong>{track.title}</strong>

                                    <small>
                                        {track.artist}
                                        {track.explicit && " - Explicit"}
                                    </small>
                                </span>

                                <span className="radio-duration">
                                    {track.duration}
                                </span>
                            </button>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    )
}
