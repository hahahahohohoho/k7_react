export default function Ball({n}) {
    const colorN = {
        'b0' : 'bg-orange-500',
        'b1' : 'bg-red-500',
        'b2' : 'bg-sky-600',
        'b3' : 'bg-green-500',
        'b4' :  'bg-violet-600'
    }
  return (
    <div className= {`w-16 h-16 mx-3 
                    inline-flex justify-center items-center rounded-full 
                    ${colorN["b"+Math.floor(n/10)]} text-white text-2xl`}>
      {n}
    </div>
  )
}
