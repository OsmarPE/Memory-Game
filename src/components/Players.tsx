import { playerType } from "../types"


interface Props{
    player:playerType,
    pointsP1:number,
    pointsP2:number
}

export default function Players({player,pointsP1, pointsP2}:Props) {

  return (
    <div className="grid gap-4 grid-cols-2 max-w-xl mx-auto mt-16">
        <div className={player === 1 ? 'player active' : 'player' }>
            <p>Jugador</p>
            <span className="">{pointsP1}</span>
        </div>
        <div className={player === 0 ? 'player active' : 'player' } >
            <p>PC</p>
            <span className="">{pointsP2}</span>
        </div>

    </div>
  )
}
