import React from 'react'

function App1() {
    const [todoinput, settodoinput] = React.useState('')
    const [todoid, settodoid] = React.useState('')
    const [todoupdate, settodoupdate] = React.useState('')

    const [updatetodoinput, setupdatetodoinput] = React.useState('')

    const [todoinputarr, settodoinputarr] = React.useState([])

    const [display, setdisplay] = React.useState(false)



    const [editing, setediting] = React.useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        settodoinputarr([...todoinputarr, todoinput])

        setdisplay(true)
        console.log(todoinputarr)

        settodoinput("")
    }






    const handleUpdate = (id, todo) => {
        console.log("the id is" + id)
        console.log("the todo is" + todo)
        console.log("the todo array is" + todoinputarr)
        setediting(true)
        setupdatetodoinput(todoinputarr[id])
        settodoid(id)
        settodoupdate(todo)
        // updateid(id,todo)
// setindextodo(id)

    }


    const handleEditSubmit = (e) => {
        e.preventDefault();



       
        const newtodos=[...todoinputarr]
      

                newtodos[todoid]=updatetodoinput;



                     settodoinputarr( newtodos)
         
        

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
                        {todo}<button onClick={() => handleUpdate(id, todo)}>update</button> <button>delete</button>

                    </div>)}          </div> : ""}
                </div>
            }
        </div>
    )
}

export default App1
