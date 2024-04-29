import {  cardType } from "../types";
import { faTrophy,faCrow,faBold ,faCar, faPaw,faTree, faSpider, faPerson, faAtom, faGlasses, faWandMagic,faBookQuran,
    faHome,faCircleUp,faCloud, faFish, faSearch, faWater
} from '@fortawesome/free-solid-svg-icons'

export const cards:cardType[] = [
    {
        movie:'cars',
        icon:faBold
    },
    {
        movie:'cars',
        icon:faCar
    },
    {
        movie:'cars',
        icon:faTrophy
    },
    {
        movie:'spiderman',
        icon:faSpider
    },
    {
        movie:'spiderman',
        icon:faPerson
    },
    {
        movie:'spiderman',
        icon:faAtom
    },
    {
        movie:'harry',
        icon:faGlasses
    },
    {
        movie:'harry',
        icon:faWandMagic
    },
    {
        movie:'harry',
        icon:faBookQuran
    },
    {
        movie:'up',
        icon:faHome
    },
    {
        movie:'up',
        icon:faCircleUp
    },
    {
        movie:'up',
        icon:faCloud
    },
    {
        movie:'nemo',
        icon:faSearch
    },
    {
        movie:'nemo',
        icon:faFish
    },
    {
        movie:'nemo',
        icon:faWater
    },
];

  
export function generateRandomCards(array: cardType[]) {
    return array.sort(() => Math.random() - 0.5);
}

export function isValuesSuccess(v1:number | '',v2:number | '',v3:number | '', cards:cardType[]) {
    if ( v1 === '' || v2 === '' || v3 === '') {
        return false
    }

    return [cards[v1].movie, cards[v2].movie, cards[v3].movie ].every(value => value === cards[v1].movie )
}

export function generatePlayPC(cardCurrent: cardType[], cardBefore: cardType[],attempsPC:(number | string)[]):number {
    let isFound = false;
    let indexR = 0
    const randomBase = Math.round(Math.random()* 3);

    while (!isFound) {
       const randomIndex = Math.round(Math.random() * 14);
       const newIndex = cardBefore.findIndex(card => card.movie === cardCurrent[randomIndex].movie)
        if (newIndex === -1) {
            if (!(attempsPC.includes(randomIndex))) {
                if (randomBase === 2 && attempsPC[0] !== '' ) {
                    console.log(attempsPC);
                    
                  const i = cardCurrent.findIndex((card,index) => (card.movie === cardCurrent[attempsPC[0] as number].movie && index !== attempsPC[0] )  )
                  console.log(i);
                    
                  indexR = i
                }else{
                    indexR = randomIndex
                }
                isFound = true
            }
        }
    }

    return indexR
    
}