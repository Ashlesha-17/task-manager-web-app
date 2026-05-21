import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Dashboard() {

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);

    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "Pending"
    });

    const token = localStorage.getItem("token");


    useEffect(() => {

        if (!token) {
            navigate("/");
        }

        fetchTasks();

    }, []);


    const fetchTasks = async () => {

        try {

            const res = await API.get(
                "/tasks",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setTasks(res.data);

        } catch (error) {

            console.log(error);
        }
    };


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const editTask = (task) => {

        setFormData({
            title: task.title,
            description: task.description,
            status: task.status
        });

        setEditId(task._id);
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // UPDATE
            if (editId) {

                await API.patch(
                    `/tasks/${editId}`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setEditId(null);
            }

            // CREATE
            else {

                await API.post(
                    "/tasks",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
            }

            setFormData({
                title: "",
                description: "",
                status: "Pending"
            });

            fetchTasks();

        } catch (error) {

            console.log(error);
        }
    };


    const deleteTask = async (id) => {

        try {

            await API.delete(
                `/tasks/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchTasks();

        } catch (error) {

            alert(
                error.response?.data?.message
            );
        }
    };


    const toggleStatus = async (task) => {

        const newStatus =
            task.status === "Pending"
            ? "Done"
            : "Pending";

        try {

            await API.patch(
                `/tasks/${task._id}`,
                { status: newStatus },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchTasks();

        } catch (error) {

            console.log(error);
        }
    };


    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");
    };


    return (

        <div className="dashboard">

            <div className="dashboard-header">

                <h1>Task Dashboard</h1>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>


            <form
                className="task-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="title"
                    placeholder="Task title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >

                    <option>Pending</option>
                    <option>Done</option>

                </select>

                <button type="submit">

                    {
                        editId
                        ? "Update Task"
                        : "Add Task"
                    }

                </button>

            </form>


            {
                tasks.map((task) => (

                    <div
                        key={task._id}
                        className="task-card"
                    >

                        <h3>{task.title}</h3>

                        <p>{task.description}</p>

                        <p>
                            Status:
                            <b> {task.status}</b>
                        </p>

                        <div className="task-buttons">

                            <button
                                className="edit-btn"
                                onClick={() =>
                                    editTask(task)
                                }
                            >
                                Edit
                            </button>

                            <button
                                className="toggle-btn"
                                onClick={() =>
                                    toggleStatus(task)
                                }
                            >
                                Toggle
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() =>
                                    deleteTask(task._id)
                                }
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                ))
            }

        </div>
    );
}

export default Dashboard;