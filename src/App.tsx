import { useEffect, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Header from './components/Header'
import { cards as CardsCurrent, generatePlayPC, generateRandomCards, isValuesSuccess, cardsI } from './helpers/data';
import { cardType, playerType } from './types';
import Players from './components/Players';
import Modal from './components/Modal'
import Card from './components/Card';
import Notify from './components/Notify';
import Instructions from './components/Instructions';




function App() {

  const [cards, setCards] = useState<cardType[]>(() => generateRandomCards(CardsCurrent))
  const [cardAnswer, setCardAnswer] = useState<cardType[]>([])
  const [instruction, setInstruction] = useState<boolean>(false)
  const [EndGame, setEndGame] = useState<boolean>(false)

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

  function resetGame() {
    setV1('')
    setV2('')
    setV3('')
    setPointsP1(0)
    setPointsP2(0)
    setPlayer(1)
    setCardAnswer([])
    setCards(() => generateRandomCards(CardsCurrent))
    setEndGame(false)
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
    if (cardAnswer.length <= cards.length - 1 ) {
      if (player === 0) {

        setTimeout(() => {

          if (([v1, v2, v3].includes(''))) {

            const i = generatePlayPC(cards, cardAnswer, [v1, v2, v3])

            setValues(i)
          }

        }, 1500);

      }
    } else {
      setEndGame(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardAnswer, v1, v2, v3])


  const verifyIndex = (index: number) => {
    if (cardAnswer.findIndex(cardAns => cardAns.movie === cards[index].movie) !== -1) return true
    return [v1, v2, v3].includes(index)
  }


  return (
    <div>
      <Header setInstruction={setInstruction} resetGame={resetGame} />
      <div className='max-w-2xl w-[90%] mx-auto mt-4 grid gap-4 md:gap-5 grid-cols-4 md:grid-cols-6'>
        {
          CardsCurrent.map(({ icon }, index) => (
            <Card
              key={index}
              icon={icon}
              player={player}
              index={index}
              setValues={setValues}
              verifyIndex={verifyIndex}
            />))
        }
      </div>
      <Players player={player} pointsP1={pointsP1} pointsP2={pointsP2} />
      <div>
        <p className={player === 0 ? 'msg active' : 'msg'}>Tu oponente esta pensando...</p>
      </div>
      <Modal modal={instruction} setModal={setInstruction} >
        <Instructions cardsI={cardsI} />
      </Modal>
      <Modal setModal={setEndGame} modal={EndGame}>
        <Notify pointsP1={pointsP1} pointsP2={pointsP2} resetGame={resetGame} />
      </Modal>
    </div>
  )
}

export default App
