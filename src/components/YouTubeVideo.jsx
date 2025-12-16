export default function YouTubeVideo({ embedUrl }) {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl aspect-video">
                <iframe
                    src={embedUrl}
                    title="YouTube video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </section>
    );
}
