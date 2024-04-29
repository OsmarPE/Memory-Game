import { useEffect, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Header from './components/Header'
import { cards as CardsCurrent, generatePlayPC, generateRandomCards, isValuesSuccess } from './helpers/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cardType, playerType } from './types';
import Players from './components/Players';
import Modal from './components/Modal'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cardsI = [...CardsCurrent]

function App() {  

  const [cards, setCards] = useState<cardType[]>(() => generateRandomCards(CardsCurrent))
  const [cardAnswer, setCardAnswer] = useState<cardType[]>([])
  const [instruction, setInstruction] = useState<boolean>(false)

  const [player, setPlayer] = useState<playerType>(1);
  // const [attempsPC, setAttempsPC] = useState<number[]>([])

  const [v1, setV1] = useState<number | ''>('')
  const [v2, setV2] = useState<number | ''>('')
  const [v3, setV3] = useState<number | ''>('')

  const [pointsP1, setPointsP1] = useState<number>(0)
  const [pointsP2, setPointsP2] = useState<number>(0)


  const setNewItemsToCard = (v1: number, v2: number, v3: number) => {
    const newCards: cardType[] = [...cardAnswer, cards[v1], cards[v2], cards[v3]]
    setCardAnswer(newCards)
  }


  const setValues = (index: number) => {

    if (v1 === '') {
      setV1(index)
      return
    }
    if (v2 === '') {
      setV2(index)
      return
    }
    if (v3 === '') {
      setV3(index)
    }



    setTimeout(() => {
      if (isValuesSuccess(v1, v2, index, cards)) {

        setNewItemsToCard(v1, v2, index)

        if (player === 1) {
          setPointsP1(pointsP1 + 1)
        } else {
          setPointsP2(pointsP2 + 1)
        }

      }

      setV1('')
      setV2('')
      setV3('')

      setPlayer(() => player === 1 ? 0 : 1)

    }, 500);

  }

  useEffect(() => {
    if (cardAnswer.length <= 14) {
      if (player === 0) {


        setTimeout(() => {
          const i = generatePlayPC(cards, cardAnswer, [v1, v2, v3])
          setValues(i)

        }, 800);
      }
    } else {
      console.log('JUEGO TERMINADO');

    }

  }, [cardAnswer, v1, v2, v3])


  const verifyIndex = (index: number) => {
    if (cardAnswer.findIndex(cardAns => cardAns.movie === cards[index].movie) !== -1) return true
    return [v1, v2, v3].includes(index)
  }
  

  return (
    <div>
      <Header setCards={setCards} setInstruction={setInstruction} />
      <div className='max-w-2xl mx-auto mt-4 grid gap-5 grid-cols-5'>
        {
          CardsCurrent.map(({ icon, movie }, index) => (
            <button disabled={verifyIndex(index)} onClick={() => setValues(index)} key={index} className='relative w-full aspect-square text-3xl flex items-center justify-center text-white bg-grayMain200 rounded-full'>
              <FontAwesomeIcon icon={icon} />
              <div className={verifyIndex(index) ? 'circle active' : 'circle'}></div>
              {/* <div className='absolute left-8 top-50% text-sm'>{movie}</div> */}
            </button>
          ))
        }
      </div>
      <Players player={player} pointsP1={pointsP1} pointsP2={pointsP2} />

      <Modal modal={instruction} setModal={setInstruction} >
        <div className=''>
          <h2 className='text-2xl font-bold text-blueMain'>Instrucciones</h2>
          <p className='leading-5 text-slate-400 mt-2 mb-8'>Para poder ganar un punto en el memorama, debes complir con el siguiente stack de cartas:</p>
          <div className='grid gap-4 grid-cols-[repeat(4,max-content)] items-center'>
            {
              cardsI.map(({icon,movie},index) => {

                return(
                  <>
                    <div className=' size-14 text-sm flex items-center justify-center text-white bg-blueMain rounded-full'>
                      <FontAwesomeIcon icon={icon} />
                    </div>
                    {
                      (index + 1) % 3 === 0 && <p className='font-semibold capitalize text-slate-800'> <FontAwesomeIcon icon={faArrowRight} className='mr-4' /> {movie}</p> 
                    }
                  </>
                )
            })
            }
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App
