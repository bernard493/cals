import React, {useState} from 'react'


const keys = [
  {
    key : '7',
    value: 7
  },
  {
    key : '8',
    value: 8
  },
  {
    key : '9',
    value: 9
  },
  {
    key : 'DEL',
    value: 'DEL'
  },
  {
    key : '4',
    value: 4
  },
  {
    key : '5',
    value: 5
  },
  {
    key : '6',
    value: 6
  },
  {
    key : '+',
    value: '+'
  },
  {
    key : '1',
    value: 1
  },
  {
    key : '2',
    value: 2
  },
  {
    key : '3',
    value: 3
  },
  {
    key : '-',
    value: '-'
  },
  {
    key : '.'
    
  },
  {
    key : '0',
    value: 0
  },
  {
    key : '/',
    value :'/'
  },
  {
    key : '*',
    value: '*'
  }


]



export const Calculator = ({theme}) => {
  const [showResult ,setShowResult] = useState(false)
  const [result , setResult] = useState(0)
  const [firstInput ,setFirstInput] = useState(0)
  const [oldInput ,setOldInput] = useState(0)
  const [operatorValue ,setOperatorValue] = useState('')


    const styles = theme === 2 ? {
          color : "#35352C", 
          backgroundColor : "#fff"  ,   
      } : theme === 3 ? {
      color :'#FFE53D',
      backgroundColor : "#1D0934"
      }:{
      color : "#fff",
      backgroundColor : "#182034"
      }
    

      const backgroundStyle = theme === 2 ? 
      {backgroundColor : "#D1CCCC"} : 
      theme === 3 ? 
      {
        //color :'#FFE53D',
        backgroundColor : "#1D0934" }
        : {backgroundColor:"#262E42"}

  function userInput(e){
    const value = e.target.value;
    firstInput === 0 ?
    setFirstInput(value):
    setFirstInput(prev => prev + value);
  }
  

  function operator(e){
    const operatorSign = e.target.value;
    setOperatorValue(operatorSign)
    setOldInput(firstInput)
    setFirstInput(0)
  }



  function deleteNumber(){
    if(firstInput.length > 0){
      setFirstInput(prevNum => prevNum.slice(0,-1))
       if(firstInput.length === 0){
        resetInput()
       }
    }
    

    
  }

 {/**after calculation and and want calculate with the result  */}
  function showUserResult(){
    const firstNumber =  Number(firstInput)
    const oldNumber =  Number(oldInput)
    const result = operatorValue === '+'?
          oldNumber + firstNumber :
          operatorValue === '*'?
          oldNumber * firstNumber :
          operatorValue === '/'?
          oldNumber / firstNumber :
          oldNumber - firstNumber
    setShowResult(true)
    setResult(result)
    setFirstInput(result)
   
  }

 
  function resetInput(){
    setShowResult(false)
    setResult(0)
    setOperatorValue('')
    setFirstInput(0)
  }


 

  return (
    <div className='py-[2rem]  md:px-[13rem]'>
      <div className='bg-[#191F32] h-[6rem] mx-[2rem] rounded-xl ' style={styles}>
        <div className='text-end  pt-[2rem] pr-[1rem]'>
            <h2 className='text-[#fff] text-end font-bold text-5xl' style={styles}>{!showResult ? firstInput > 0 ? firstInput : 0 :  result}</h2>
        </div>
         
      </div>
      <div className=' my-[2rem]   mx-[2rem] rounded-md' style={backgroundStyle}>
        <div className='grid grid-cols-4 gap-4 p-[1rem] '>
          {keys.map(key =><button
          
          onClick={(e)=>{ key.key === '+' || key.key === '-'  || key.key === '*'  || key.key === '/'  ? operator(e) :
          key.key === 'DEL' ? deleteNumber():
          userInput(e)
            }
           }
           
          value={key.key} className='h-[4rem] w-[4rem] text-3xl font-bold bg-[#E9E2DA]   hover:bg-[#fff] rounded-md drop-shadow-xl border-b-4 border-[#B6AB9D] md:w-[8rem]'
            style={ key.key === 'DEL'?
             {backgroundColor: "#637197",
              hover: '#c5d0f0',
              borderBottom: '4px solid #575E75',
              color: '#fff',
              cursor: 'pointer',
              
            }:{backgroundColor: '#E9E2DA',
              hover: '#fff'
          } }
           >{key.key}</button>
        )}
             
        </div>
        <div className='grid grid-cols-2 gap-4 px-[1rem] pb-[2rem] '>
          <button onClick={resetInput}   className='h-[4rem] w-[9rem] text-2xl text-[#fff] font-bold bg-[#637197] hover:bg-[#c5d0f0] rounded-md drop-shadow-xl border-b-4 border-[#575E75]  md:w-[17rem]'>RESET</button>
          <button   value='7' className='h-[4rem] w-[9rem] text-3xl text-[#fff] font-bold bg-[#D13F30] hover:bg-[#f2948a] rounded-md drop-shadow-xl border-b-4 border-[#832720] md:w-[17rem]' 
          onClick={showUserResult}>=</button>    
        </div>
      </div>
      
    </div>
  )
}


