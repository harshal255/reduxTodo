'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../redux/slice';

const Page = () => {

    const dispatch = useDispatch();

    const apiUserData = useSelector(data => data.usersData.userApiData);
    console.log(apiUserData);

    useEffect(() => {
        dispatch(fetchApiUsers())
    }, [])

    return (
        <div className='flex flex-col justify-center items-center h-full my-20 max-w-full gap-5'>
            <h1>All Users fetched by api</h1>
            {/* <button className='rounded-3xl bg-gray-500 duration-300 hover:bg-gray-700 hover:text-white p-5 hover:text-[1.2rem]'
                onClick={() => dispatch(fetchApiUsers())}>
                Add user
            </button> */}

            <div className="flex flex-col gap-5">
                {
                    apiUserData.map((ele, index) => {
                        return <div key={index} className="border-2 border-red-500 p-4 text-black">{ele.name}{`&`} {ele.username}</div>
                    })
                }
            </div>

        </div>
    )
}

export default Page
