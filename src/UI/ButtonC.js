export default function ButtonC({caption, bcolor, handleClick}) {
  const colorB = {
    'blue' : 'bg-blue-400', 'orange' : 'bg-orange-200'
  }
  const colorBHover = {
    'blue' : 'hover:bg-orange-400', 'orange'  :'hover:bg-blue-400'
  }

  return (
    <button className={`inline-flex px-5 justify-center items-center
                        w-44 h-10 mx-2
                       text-white font-bold ${colorB[bcolor]} ${colorBHover[bcolor]} rounded-md`} 
                        onClick={handleClick}>
      {caption}
    </button>
  )
}
