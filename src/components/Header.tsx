import { cardType } from "../types"

interface Props{
    setCards:(cards:cardType[]) => void,
    setInstruction:(values:boolean) => void,
    
}

export default function Header({setCards,setInstruction}:Props) {
    return (
        <header className='h-28 flex items-center justify-between w-[90%] max-w-5xl mx-auto font-primary'>
            <h1 className='font-bold text-2xl'>Memory</h1>
            <div className="flex items-center gap-4">
                <button className='py-2.5 px-5 duration-500 transition-opacity hover:opacity-75 text-base rounded-3xl bg-YellowMain text-white font-bold'>Reiniciar</button>
                <button onClick={() => setInstruction(true)} className='py-2.5 px-5 duration-500 transition-opacity hover:opacity-75 text-base rounded-3xl bg-grayMain text-blueMain font-bold'>Instrucciones</button>
            </div>
        </header>
    )
}
