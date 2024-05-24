import React from 'react'

const Reminder = () => {
  return (
    <div className='border border-gray-400 m-16 p-4'>
        <div className='flex justify-arround'>
                <div className='bg-blue-600 w-20 h-10 rounded-full mt-2'>

                </div>
                <div className='pl-6 flex flex-wrap'>
                    <h1 className='font-bold'>Schedule your learning Time</h1>
                    <p>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
                    <div>
                        <button className='text-sm text-white font-bold bg-gray-800 px-3 py-2 mt-4'>
                            Get Started
                        </button>
                        <button className='m-5 cursor pointer font-bold'>
                            Dismiss
                        </button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Reminder