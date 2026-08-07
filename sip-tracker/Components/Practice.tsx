import { useUser } from "../Context/UserProvider";

function Practice() {
  const { name, setName } = useUser();

  const changeName = () => {
    console.log("previous name:", name);
    setName("New Name");   
  };

  return (
    <div>
      <h1>{name}</h1>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default Practice;