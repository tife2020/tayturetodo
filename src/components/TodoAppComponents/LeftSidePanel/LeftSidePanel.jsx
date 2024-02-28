import React, { useEffect, useState } from 'react';
import AddTask from "./AddTaskCom/AddTask";
import Profile from "./Profile";
import Inbox from "../Pages/Inbox";
import Search from "../Pages/Search"
import Today from "../Pages/Today";
import { GoCircle } from "react-icons/go";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";


export default function LeftSideApp() {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [modal, setModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedIndex, setEditedIndex] = useState(null);
    const [newTaskName, setNewTaskName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);


    
    const toggleModal = () => {
        setModal(prev => !prev);
        setEditMode(false); 
    };

    const handleAddTodo = () => {
        const newTodoItem = {
            title: newTaskName,
            description: newDescription,
        };
        const updatedTodos = [...allTodos, newTodoItem];
        setAllTodos(updatedTodos);
        
        localStorage.setItem('allTodos', JSON.stringify(updatedTodos));
        setNewTaskName("");
        setNewDescription("");
        setModal(false);
    };

    const handleDelete = (index) => {
        let reducedTodo = [...allTodos];
        reducedTodo.splice(index, 1); 
        setAllTodos(reducedTodo); 
        /**
        setTodos((prev) => {
            const newTodo = prev.filter((todo, ind) => ind !== index)
            return [...newTodo]
        })
         */
    };

    const handleEdit = (item, index) => {
        setNewTaskName(item.title);
        setNewDescription(item.description);
        setEditIndex(index)
        setEditMode(true);
        setModal(true);

     /**   setEditedIndex(index);
       
        setEditMode(true);
        toggleModal(); 
         */
    };

    const handleEditTodo = () => {
        setAllTodos((prev) => {
            const newTodo = prev.map((todo, ind) => {
                if (ind === editIndex) {
                    return {
                        title: newTaskName,
                        description: newDescription
                    }
                } else {
                    return todo
                }
            })
            localStorage.setItem('allTodos', JSON.stringify(newTodo));
            return [...newTodo]
        })
        setEditedIndex(null);
        setNewTaskName("");
        setNewDescription("");
        setModal(false);
        
       /** const updatedTodos = [...allTodos];
        updatedTodos[editedIndex] = { title: newTaskName, description: newDescription };
        setAllTodos(updatedTodos);
        */
    };

    const handleComponentClick = () => {
        setSelectedComponent('Inbox');
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('allTodos'));
        if (storedTodos) {
            setAllTodos(storedTodos);
        }
    }, []);


    return (
        <div className="wrapper">
            <div className="leftSideComponentCont">
                <Profile />
                <AddTask toggleModal={toggleModal} />
                <Search />
                <Inbox handleClick={handleComponentClick} todos={allTodos} /> 
                <Today />
            </div>
            <div className="main-content">
                {selectedComponent === 'Inbox' && 
                    <div classname="">
                        <h2 className='inbox-heading'>Inbox</h2>
                        <div className="mid">
                            {allTodos.length > 0 && allTodos.map((item, index) => {
                                return (
                                    <div className="todo-list-item" key={index}>
                                        <div style={{ display: "flex", gap: "7px", paddingTop: "20px", paddingBottom: "5px" }}>
                                            <GoCircle onClick={() => handleDelete(index)} />
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <p>{item.title}</p>
                                                <p style={{ paddingRight: "2px" }}>{item.description}</p>
                                            </div>
                                            <HiPencil onClick={() => handleEdit(item, index)} /> 
                                        </div>
                                    </div>
                                );
                            })}
                            <div onClick={toggleModal} style={{ display: "flex", paddingTop: "25px" }}>
                                <HiOutlinePlusSmall style={{ color: "#DC4C3E" }} size= "25px" />
                                <p 
                                style={{ 
                                    paddingBottom: "5px", 
                                    paddingRight: "2px",
                                    display: "flex",
                                    }}>
                                    Add Task</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {modal && (
                <div className="modal">
                    <div className="modal-content">
                        <form className="task"
                        style={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                        >
                            <input
                                type="text"
                                value={newTaskName}
                                onChange={(e) => setNewTaskName(e.target.value)}
                                placeholder="Task name"
                                className="task-name"
                            />
                            <input
                                type="text"
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                placeholder="Description"
                                className="description"
                            />
                        </form>

                        <hr className="hr-addtask" />
                        <div className="foot-btn">
                            <button className="foot-cancel" onClick={toggleModal}>
                                Cancel
                            </button>
                            <div>
                                {editMode ? (
                                    <button type="button" onClick={handleEditTodo} className="foot-addtask">
                                        Edit Task
                                    </button>
                                ) : (
                                    <button type="button" onClick={handleAddTodo} className="foot-addtask">
                                        Add Task
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
