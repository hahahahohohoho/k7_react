export default function ButtonC({caption, bcolor, handleClick}) {
  const colorB = {
    'blue' : 'bg-blue-400', 'orange' : 'bg-orange-200'
  }
  const colorBHover = {
    'blue' : 'bg-orange-400', 'orange' : 'bg-blue-400'
  }

  return (
    <button className={`inline-flex px-5 justify-center items-center
                        w-32 h-10
                       text-white font-bold ${colorB[bcolor]} hover:${colorBHover[bcolor]} rounded-md`} 
                        onClick={handleClick}>
      {caption}
    </button>
  )
}
