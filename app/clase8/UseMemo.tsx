import React, { useState, useMemo, useEffect } from 'react';


function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {setDebouncedValue(value);}, delay);

            return () => {clearTimeout(handler);};
        }, [value, delay]);

        return debouncedValue;
        }


export default function TaskList({ tasks }) {
    const [search, setSearch] = useState('')
    const [tasksWithCheck, setTasksWithCheck] = useState(tasks);
    const debouncedSearch = useDebounce(search, 200);


    const filteredTasks = useMemo(() => {
        return tasksWithCheck.filter(
            task => task.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) || task.checked === true
        )
    }, [debouncedSearch, tasksWithCheck])



        


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
                    <li key={task.id}>
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
