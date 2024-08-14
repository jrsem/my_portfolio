'use client';

import CountUp from 'react-countup';

type props={
    desc_1:string 
    desc_2:string

}
const AnimatedCounter = ({ amount ,desc_1,desc_2}: { amount: number , desc_1:string ,desc_2:string}) => {
  return (
    <div className="w-full text-white-1 flex gap-2 items-center">
      <CountUp 
        // decimals={2}
        // decimal=","
        // prefix="$"
        end={amount} 
        className='text-3xl font-bold'
      />
      <div className="text-[10px] text-white-2">
        <p>{desc_1}</p>
        <p>{desc_2}</p>
      </div>
      
    </div>
  )
}

export default AnimatedCounter