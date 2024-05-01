
interface Props{
    setInstruction:(values:boolean) => void,
    resetGame:() => void
}

export default function Header({setInstruction,resetGame}:Props) {
    return (
        <header className='md:h-24 pt-6 md:pt-0 mb-10 md:mb-0 flex flex-col gap-5 md:flex-row md:items-center justify-between w-[90%] max-w-5xl mx-auto font-primary'>
            <h1 className='font-bold text-2xl text-white'>Memory</h1>
            <div className="flex items-center gap-4 text-black font-bold">
                <button onClick={resetGame} className='py-2.5 px-5 border-2 border-black duration-500 transition-opacity hover:opacity-75 text-base rounded-3xl bg-YellowMain  shadow-main '>Reiniciar</button>
                <button onClick={() => setInstruction(true)} className='py-2.5 px-5 duration-500 transition-opacity hover:opacity-75 text-base rounded-3xl bg-grayMain border-black border-2 shadow-main '>Instrucciones</button>
            </div>
        </header>
    )
}
