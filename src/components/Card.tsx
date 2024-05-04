import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { playerType, validateProps } from "../types"

interface Props{
    verifyIndex:(index:number) => validateProps,
    setValues:(index:number) => void,
    index:number,
    icon:IconProp,
    player:playerType
}

export default function Card({verifyIndex,index,setValues,icon,player}:Props) {
    

    const verify:validateProps =  verifyIndex(index);

    return (
        <button disabled={player === 0 ? true : verify.isActive} onClick={() => setValues(index)} key={index} className={verify.name === 'completed' ? 'card completed': 'card base'}>
            <FontAwesomeIcon icon={icon} />
            <div className={verify.isActive ? 'circle active' : 'circle'}></div>
            {/* <div className='absolute left-8 top-50% text-sm'>{movie}</div> */}
        </button>
    )
}
