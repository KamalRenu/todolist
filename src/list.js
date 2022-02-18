import React, {useState} from 'react'

function List() {
    var num = 0;
    const [input, setInput] = useState("")
    const [value, setValue] = useState([])

    const handleChange = e => {
        e.preventDefault();
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValue([...value, { id: num = num + 1, text: input }])
        setInput("");
    }

    const removeHandle = obj => {
        let i = value.findIndex(elem => obj.id === elem.id)
        value.splice(i, 1);
        setValue([...value]);
    }
    return (
        <div className="card-body">
            <h4 className="card-title">Awesome Todo list</h4>
            <form className="add-items d-flex" onSubmit={handleSubmit}> <input value={input} type='text' name='text' className="form-control todo-list-input" placeholder="What do you need to do today?" onChange={handleChange} /> <button className="add btn btn-primary font-weight-bold todo-list-add-btn" >Add</button> </form>
            <div className="list-wrapper">
                <ul className="d-flex flex-column-reverse todo-list">
                    {
                        value.map((elem) => {
                            return (
                                <li>
                                    <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> {elem.text} <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline" onClick={() => removeHandle(elem)}></i>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default List