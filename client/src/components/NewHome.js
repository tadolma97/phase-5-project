import AddMedicine from "./AddMedicine"
function NewHome({user}){
    return (
        <div>
            <h1> Let's get started by adding your Medicine!</h1>
            <AddMedicine user={user} ></AddMedicine>

        </div>
    )
}

export default NewHome
