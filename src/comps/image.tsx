export function WildlifeImage({
    src,
    alt,
    className = "",
}:{
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <img className={className} src={src} alt={alt} width="1200" height="800" />
    );
}