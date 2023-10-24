'use client'
import React, { useState } from 'react';
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';


const AddUsers = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch()

    const onSubmit = () => {
        // console.log(name);
        dispatch(addUser(name));

    }
    return (
        <section className='flex flex-col justify-center items-center min-h-[25vh] max-w-full gap-5 pt-20'>
            <Link href="/newpage" className='text-purple-500'>New Page</Link>
            <Link href="/todolist" className='text-purple-500'>Todo List</Link>
            <Link href="/apiusers" className='text-purple-500'>API users</Link>
            <div className="flex gap-5">
                <div>AddUsers</div>
                <input type="text" placeholder='add New user' className='border-2 border-blue-400' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <button className='rounded-3xl bg-gray-500 duration-300 hover:bg-gray-700 hover:text-white p-5 hover:text-[1.2rem]' onClick={() => onSubmit()}> Add user</button>
        </section>
    )
}

export default AddUsers