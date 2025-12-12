export default function YouTubeVideo({ embedUrl }) {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                maxWidth: "1600px",
                margin: "0 auto",
                paddingBottom: "56.25%", // 16:9 ratio
            }}
        >
            <iframe
                src={embedUrl}
                title="YouTube video"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                allowFullScreen
            ></iframe>
        </div>
    );
}
