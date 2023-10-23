'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';
import { LuDelete } from 'react-icons/lu';

const page = () => {

    const userData = useSelector(data => data.usersData.users);
    console.log(userData);
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col justify-center items-center min-h-[50vh] max-w-full gap-5 border-4 border-pink-300'>
            <h1 className='text-xl bg-pink-600 p-5'>Users List {`>`} New page</h1>
            {
                userData && userData.map((ele, index) => {
                    return <div key={index} className='flex gap-2 items-center justify-between'>{ele.name} <span onClick={() => dispatch(removeUser(ele.id))}><LuDelete /></span></div>
                })

            }
        </div>
    )
}

export default page
