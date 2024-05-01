import { Confetti } from "../helpers/Confetti"

interface Props{
    pointsP1:number,
    pointsP2:number,
    resetGame:() => void
}

export default function Notify({pointsP1,pointsP2,resetGame}:Props) {

    if (pointsP1 > pointsP2) {
        Confetti()
        
    }

    return (
        <div className='text-center bg-purpleMain py-10 text-grayMain'>
            <div>
                <h2 className='font-bold text-4xl uppercase tracking-[2px]'>{pointsP1 === pointsP2 ? 'Empate' : pointsP1 > pointsP2 ? 'Ganaste' : 'Perdiste'}</h2>
                <p className='text-gray-100 mt-1 mb-12'>¿Quieres volver a intentarlo?</p>
            </div>
            <button onClick={resetGame} className='w-max mx-auto py-2.5 px-5 rounded-2xl transition-all duration-500 hover:bg-YellowMain/90 bg-YellowMain text-black border-2 border-black font-bold text-xl shadow-main200'>
                Reiniciar
            </button>
        </div>
    )
}
