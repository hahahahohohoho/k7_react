export default function Mydiv3(probs) { //이름이 probs일 필요 없음
    return (
        <div className="flex flex-col p-2 m-2 w-2/3 h-2/3  justify-center items-center bg-red-950 w-full text-cyan-300 text-xl">
            <div className="w-full">
            {`${probs.dn1}>${probs.dn2}>${probs.dn3}`}
            </div>
        </div>
    )
}
