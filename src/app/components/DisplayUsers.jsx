'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LuDelete } from 'react-icons/lu';
import { removeUser } from '../redux/slice';



const DisplayUsers = () => {
    //we have declared state using users name in slice.js file
    const userData = useSelector(data => data.usersData.users);
    console.log(userData);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col justify-center items-center min-h-[50vh] max-w-full gap-5'>
            <h1 className='text-xl bg-pink-600 p-5'>Users List</h1>
            {
                userData && userData.map((ele, index) => {
                    return <div key={index} className='flex gap-2 items-center justify-between'>{ele.name} <span onClick={() => dispatch(removeUser(ele.id))}><LuDelete /></span></div>
                })

            }
        </div>
    )
}

export default DisplayUsers