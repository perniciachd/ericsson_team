import TopBar from "./TopBar";

function Home({ parentCall }: any) {
    const handleLogout = () => {
        parentCall();
    };

    return (
        <>
            <TopBar onLogout={handleLogout} />
            <div style={{ padding: "16px" }}>
                <button>Explore funds</button>
            </div>
          
        </>
    );
}

export default Home;