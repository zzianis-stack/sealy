export interface RadioTrack {
    id: string;
    title: string;
    artist: string;
    duration: string;
    file: string;
    explicit: boolean;
}

export const radioTracks: RadioTrack[] = [
    {
        id: "sea-notes",
        title: "Sea Notes",
        artist: "G Lion",
        duration: "1:40",
        file: "sea-notes.mp3",
        explicit: false,
    },
    {
        id: "slick-flipper",
        title: "Slick Flipper",
        artist: "G Lion",
        duration: "1:18",
        file: "slick-flipper.mp3",
        explicit: false,
    },
    {
        id: "pow-pow",
        title: "Pow Pow Pow",
        artist: "G Lion",
        duration: "2:38",
        file: "pow-pow.mp3",
        explicit: true,
    },
    {
        id: "put-ya-flippers-up",
        title: "Put Ya Flippers Up",
        artist: "G Lion",
        duration: "2:07",
        file: "put-ya-flippers-up.mp3",
        explicit: false,
    }
];

export const radioArtist = {
    name: "G Lion",
    appleMusicUrl: "https://music.apple.com/us/artist/g-lion/1879463276",
    releaseUrl: "https://distrokid.com/hyperfollow/glion2/sea-notes"
};

