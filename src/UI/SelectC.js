import React from 'react'

export default function SelectC({ id, ops, selRef, initMsg, handleChange }) {
    const opTags = ops?.map(item => <option key={item} value={item}>{item}</option>)
    return (
        <div>
            <select id={id} onChange={handleChange} ref={selRef}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ps-10 p-2.5">
                <option defaultValue='' selected disabled>{initMsg}</option>
                {opTags}
            </select>
        </div>
    )
}
