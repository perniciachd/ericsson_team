import { useUser } from "../context/UserContext";
function Example()
{
   const { name, setName} =  useUser();
   console.log(name);
   return <div>{name}</div>;
}
export default Example;
