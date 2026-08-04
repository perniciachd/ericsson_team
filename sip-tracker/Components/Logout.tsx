import Button from './atomic/Button';

function Logout() { 
const Logout =() =>{
    console.log(alert("Logout button clicked"));
}
    return (
    <>  
    <Button title="Logout" btnClicked={Logout} cssStyle="bg-slate-700 text-white px-4 py-2 rounded-lg" />
</>
    )
}
export default Logout;