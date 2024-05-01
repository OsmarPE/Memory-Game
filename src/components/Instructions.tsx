import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { cardType } from "../types"

interface Props {
  cardsI: cardType[],

}
export default function Instructions({ cardsI }: Props) {
  return (
    <div className='bg-purpleMain py-10 '>
      <h2 className='text-4xl text-white tracking-[2px] font-bold text-blueMain uppercase'>Instrucciones</h2>
      <p className='leading-5 text-slate-100 mt-2 mb-8'>Para poder ganar un punto en el memorama, debes complir con el siguiente stack de cartas:</p>
      <div className='grid gap-4 grid-cols-[repeat(8,max-content)] justify-center items-center'>
        {
          cardsI.map(({ icon, movie }, index) => {

            return (
              <>
                <div className=' size-14 text-sm flex bg-purpleMain200 border-2 border-black items-center justify-center text-white bg-blueMain rounded-full'>
                  <FontAwesomeIcon icon={icon} />
                </div>
                {
                  (index + 1) % 3 === 0 && <p className='font-semibold capitalize  text-white text-left ml-4'> {movie}</p>
                }
              </>
            )
          })
        }
      </div>
    </div>
  )
}
