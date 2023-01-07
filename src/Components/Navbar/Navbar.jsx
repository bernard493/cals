import React from 'react'

export const Navbar = ({toggle,theme}) => {


      const styles = theme === 2 ? {
        color : "#35352C",      
    } : theme === 3 ? {
    color :'#FFE53D'
    }:{
    color : "#fff"
    }

  return (
    <div className='flex  justify-between pt-[2rem] px-[2rem] md:px-[15rem]' >
        <div className=' text-[#fff] pt-6'>
             <h1 className='text-4xl  font-bold' style={styles}>calc</h1>
        </div>
        <div className='flex items-center space-x-5 text-[#fff]'>
            <div className='mt-6'>
                <h1 className='text-lg font-mono' style={styles}>THEME</h1>
            </div>
            <div className='flex-col justify-center'>
                <div className='flex text-md font-mono space-x-5 text-center' style={styles}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <div className='relative bg-[#232C43] h-8 w-[4.8rem] rounded-full' onClick={toggle}>
                  {
                    theme === 1 ? 
                    <div className='absolute bg-[red] ml-[0.2rem] mt-[0.5rem]  h-[1rem] w-[1rem] rounded-full animate-bounce' />
                    : theme === 2 ?
                    <div className='absolute bg-[#E6E6E6] ml-[1.8rem] mt-[0.5rem]  h-[1rem] w-[1rem] rounded-full animate-bounce' />
                      : <div className='absolute bg-[#00E0D1] ml-[3.5rem] mt-[0.5rem]  h-[1rem] w-[1rem] rounded-full animate-bounce' />

                  }
                </div>
            </div>
        </div>
    </div>
  )
}
