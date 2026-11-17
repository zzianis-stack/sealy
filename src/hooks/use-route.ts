import { useEffect, useState } from "react"; 

export function readPath(): string {
    const raw = window.location.hash.slice(1) || "/";
    try {
        return decodeURIComponent(raw).replace(/\/+$/, "") || "/";
    } catch {
        return "/invaluid";
    }
}

export function useRoute(): string {
    const [path, setPath] = useState(readPath);
    useEffect(() => {
        const onChange = () => setPath(readPath());
        window.addEventListener("hashchange", onChange);
        return () => window.removeEventListener("hashchange", onChange);
    }, []);
    return path;
}