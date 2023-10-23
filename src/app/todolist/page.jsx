'use client'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { LuDelete } from 'react-icons/lu';

const page = () => {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (todo) {
            console.log(todo);
            dispatch(addTodo(todo));
        }
    }

    const todoData = useSelector(data => data.todosData.todos);

    return (
        <>
            <div className='flex flex-col justify-center items-center min-h-[25vh] max-w-full gap-5'>
                <div className="flex gap-5">
                    <div>Add Todo</div>
                    <input type="text" placeholder='add New user' className='border-2 border-blue-400' onChange={(e) => setTodo(e.target.value)} />
                </div>
                <button className='rounded-3xl bg-gray-500 text-white duration-300 hover:bg-gray-700 hover:text-white p-5 hover:text-[1.2rem]' onClick={() => onSubmit()}>Add Todo</button>
            </div>
            <div className='flex flex-col items-center min-h-fit max-w-full gap-5 '>
                <h1 className='text-xl bg-purple-600 text-white p-5'>Todo List</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 mt-10">
                {
                    todoData && todoData.map((ele, index) => {
                        return <div key={index} className='flex gap-2 items-center justify-between p-3 bg-green-400'>{ele.name} <span><LuDelete /></span></div>
                    })

                }
            </div>
        </>
    )
}

export default page