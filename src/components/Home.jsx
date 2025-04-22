import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto mt-17'>
        <section>
            <div className='h-100 lg:h-150 px-2 lg:p-0 w-full flex grid grid-cols-3'>
                <div className='flex flex-col col-span-3 lg:col-span-2 justify-center w-full'>
                    <h6 className='w-fit text-sm lg:text-xl text-white/50 bg-linear-to-r from-white/20 to-white/0 p-1 rounded-full mb-3 lg:mb-9'><span className='text-white/100'>👏</span> It's me <span className='text-white'>Twizz.</span></h6>

                    <h1 className='text-white font-bold text-[27px] lg:text-5xl lg:mb-4'>Designing with Purpose,<br />Developing with Impact.</h1>

                    <p className='text-white/50 text-[10px] lg:text-lg'>
                    I’m learning to design and code with purpose—so every project <br />
                    I build can bring value and inspire others.
                    </p>
                </div>
                <div className=''>

                </div>

            </div>
        </section>
    </div>
  )
}

export default Home