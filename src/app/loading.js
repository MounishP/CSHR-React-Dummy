import React from 'react'
import { Suspense } from 'react'

const loading = () => {
    return (
        <section className='py-24'>
            {/* <div className="container">
                <h2 className='text-3xl'>Loading..........!!!</h2>
            </div> */}
            <Suspense fallback={<p>Loading feed...</p>}>
                <page />
            </Suspense>

        </section>
    )
}

export default loading
