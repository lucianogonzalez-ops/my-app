import React, { useState, useMemo } from 'react';

export default function TaskList({ tasks }) {
    const [search, setSearch] = useState('')
    const [tasksWithCheck, setTasksWithCheck] = useState(tasks);

    const filteredTasks = useMemo(() => {
        return tasksWithCheck.filter(
            task => task.name?.toLowerCase().includes(search.toLowerCase()) || task.checked === true
        )
    }, [search, tasksWithCheck])

    const handleCheckboxChange = (id) => {
        setTasksWithCheck(
            tasksWithCheck.map(task => task.id === id? { ...task, checked: !task.checked }: task
            )
        );
    };

    return (
        <div>
            <input
                placeholder="..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filteredTasks.map(task => (
                    <li>
                        {task.category} : {task.name}

                        <input
                            type="checkbox"
                            checked={task.checked}
                            onChange={() => handleCheckboxChange(task.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
