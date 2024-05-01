import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { playerType } from "../types"

interface Props{
    verifyIndex:(index:number) => boolean,
    setValues:(index:number) => void,
    index:number,
    icon:IconProp,
    player:playerType
}

export default function Card({verifyIndex,index,setValues,icon,player}:Props) {
    return (
        <button disabled={player === 0 ? true : verifyIndex(index)} onClick={() => setValues(index)} key={index} className='relative border-2 border-black w-full aspect-square text-2xl flex items-center justify-center text-white shadow-main200 bg-purpleMain200 rounded-full'>
            <FontAwesomeIcon icon={icon} />
            <div className={verifyIndex(index) ? 'circle active' : 'circle'}></div>
            {/* <div className='absolute left-8 top-50% text-sm'>{movie}</div> */}
        </button>
    )
}
