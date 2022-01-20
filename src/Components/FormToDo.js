import React from "react";


const FormToDo = () => {
    return(
        <form>
            <input type="text" class="input-todolist" />
            <button class="button-todolist" type="submit">
                <i class="fas fa-plus-square"></i>
            </button>
            <div class="select">
                <select name="todos" class="show-todo">
                    <option value="all-todo">All</option>
                    <option value="completed-todo">Completed</option>
                    <option value="incomplete-todo">InComplete</option>
                </select>
            </div>
        </form>
    );
};