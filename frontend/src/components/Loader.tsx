export default function Loader() {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "65vh" }}
        >
            <div
                className="spinner-border highlight"
                style={{ width: "3em", height: "3em" }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
