import React from 'react'

const Todocrud = () => {
    const [todoinput, settodoinput] = React.useState('')
    const [todoid, settodoid] = React.useState('')
    const [todoupdate, settodoupdate] = React.useState('')
    const [updatetodoinput, setupdatetodoinput] = React.useState('')
    const [todoinputarr, settodoinputarr] = React.useState([])//declared empty array to store
    const [display, setdisplay] = React.useState(false)  //decalred the boolen to display edit form
    const [editing, setediting] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();   //to prevent re-rendering
        settodoinputarr([...todoinputarr, todoinput])  //passing the existing array elements and the added input
        setdisplay(true)
        console.log(todoinputarr)

        settodoinput("") // to set the input area null after submitting the form
    }


    const handleDelete = (id) => {
        console.log(id)
        const newtodos = [...todoinputarr]
        newtodos.splice(id, 1)
        settodoinputarr(newtodos)
    }


    const handleUpdate = (id, todo) => {
        console.log("the id is" + id) //selected id
        console.log("the todo is" + todo) //selected value
        console.log("the todo array is" + todoinputarr) //array value
        setediting(true) //to display editing form
        setupdatetodoinput(todoinputarr[id]) //aautopopulate the selected element
        settodoid(id)  //storing id
        settodoupdate(todo) //storing the selected value


    }


    const handleEditSubmit = (e) => {
        e.preventDefault();
        const newtodos = [...todoinputarr]
        newtodos[todoid] = updatetodoinput;
        settodoinputarr(newtodos)
        setupdatetodoinput("")
        setediting(false)

    }

    const handleUpdateChange = (e) => {
        setupdatetodoinput(e.target.value)




    }
    const handleChange = (e) => {
        settodoinput(e.target.value)
    }
    return (
        <div>
            <h2>Todo Form</h2>


            {editing ? <div>

                <div>

                    <form onSubmit={handleEditSubmit}>
                        <input type="text" placeholder="todo app" value={updatetodoinput} onChange={handleUpdateChange} required /><br />
                        <button>submit</button>

                    </form>




                </div>
            </div> : <div>

                <div>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="todo app" value={todoinput} onChange={handleChange} required /><br />
                        <button>submit</button>

                    </form>

                </div>

            </div>}

            {
                <div>
                    {display ? <div>  {todoinputarr.map((todo, id) => <div key={id}>
                        {todo}<button onClick={() => handleUpdate(id, todo)}>update</button> <button onClick={() => handleDelete(id)}>delete</button>

                    </div>)}          </div> : ""}
                </div>
            }
        </div>
    )
}

export default Todocrud
