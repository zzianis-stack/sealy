export type IconName =
  | "spark"
  | "close"
  | "check"
  | "menu"
  | "search"
  | "arrow";

const paths: Record<IconName ,string> = {
    spark: "m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7",
    close: "m6 6 12 12M6 18 18 6",
    check: "m5 12 4 4L19 6",
    menu: "M4 6h16M4 12h16M4 18h16",
    search: "m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 1 16 0",
    arrow: "M4 12h16m-6-6 6 6-6 6"
};

export function Icon({
    name,
    className = "",
}: {
    name: IconName;
    className?: string;
}) {
    return (
        <svg 
            className={`icon ${className}`}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d={paths[name]} />
        </svg>
    );
}
export function SealMark({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            width="48"
            height="34"
            viewBox="0 0 64 44"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M8 31C3 33 2 28 5 25l8-9C18 7 31 5 40 9c8 4 9 14 3 19l11 3 7-8-3 12-13 1-21-3-8 5-2-8Z"
                fill="currentColor"
            />
            <circle cx="32" cy="17" r="2" fill="var(--paper)" />
            <path
                d="m17 23 9-1m-8 6 8-3m-4-10 2 5"
                stroke="var(--paper)"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}