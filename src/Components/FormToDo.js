import React from "react";

const FormToDo = () => {
    return(
        <form>
            <input type="text" className="input-todolist" />
            <button className="button-todolist" type="submit">ADD</button>
            <div className="select">
                <select name="todos" className="show-todo">
                    <option value="all-todo">All</option>
                    <option value="completed-todo">Completed</option>
                    <option value="incomplete-todo">InComplete</option>
                </select>
            </div>
        </form>
    );
};

export default FormToDo;