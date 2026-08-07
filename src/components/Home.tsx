import TopBar from "./TopBar";
import { useUser } from "./context/UserContext";

function Home({ parentCall }: any) {
    const {name} = useUser();
    console.log(name);
    const handleLogout = () => {
        parentCall();
    };

    return (
        <>
        <span>{name}</span>
            <TopBar onLogout={handleLogout} />
            <div style={{ padding: "16px" }}>
                <button>Explore funds</button>
            </div>
          
        </>
    );
}

export default Home;