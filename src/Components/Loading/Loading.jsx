import React from 'react'

export default function Loading() {
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}
