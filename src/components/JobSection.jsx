
import React from 'react'
import User from './User';

export function JobSection() {
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center text-yellow-500 mb-4'>Jobs</h1>
            <div className='flex flex-wrap justify-around items-center gap-10'>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    );
}
