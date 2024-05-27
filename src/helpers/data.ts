import {  cardType, cardTypeC } from "../types";
import { faTrophy,faBolt ,faCar, faSpider, faPerson, faAtom, faGlasses, faWandMagic,faBookQuran,
    faHome,faCircleUp,faCloud, faFish, faSearch, faWater,faGuitar,faSchool,faHandPeace, faDog,faMoneyBillTrendUp,faDollarSign,
    faCloudRain,faBurger,faUtensils
} from '@fortawesome/free-solid-svg-icons'

export const cardsWithActived:cardTypeC[] = [
    {
        movie:'cars',
        icon:faBolt,
        active:false
    },
    {
        movie:'cars',
        icon:faCar,
        active:false
    },
    {
        movie:'cars',
        icon:faTrophy,
        active:false
    },
    {
        movie:'spiderman',
        icon:faSpider,
        active:false
    },
    {
        movie:'spiderman',
        icon:faPerson,
        active:false
    },
    {
        movie:'spiderman',
        icon:faAtom,
        active:false
    },
    {
        movie:'harry potter',
        icon:faGlasses,
        active:false
    },
    {
        movie:'harry potter',
        icon:faWandMagic,
        active:false
    },
    {
        movie:'harry potter',
        icon:faBookQuran,
        active:false
    },
    {
        movie:'up',
        icon:faHome,
        active:false
    },
    {
        movie:'up',
        icon:faCircleUp,
        active:false
    },
    {
        movie:'up',
        icon:faCloud,
        active:false
    },
    {
        movie:'nemo',
        icon:faSearch,
        active:false
    },
    {
        movie:'nemo',
        icon:faFish,
        active:false
    },
    {
        movie:'nemo',
        icon:faWater,
        active:false
    },
    {
        movie:'camp rock',
        icon:faGuitar,
        active:false
    },
    {
        movie:'camp rock',
        icon:faHandPeace,
        active:false
    },
    {
        movie:'camp rock',
        icon:faSchool,
        active:false
    },
    {
        movie:'el lobo de wall street',
        icon:faMoneyBillTrendUp,
        active:false
    },
    {
        movie:'el lobo de wall street',
        icon:faDollarSign,
        active:false
    },
    {
        movie:'el lobo de wall street',
        icon:faDog,
        active:false
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faUtensils,
        active:false
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faBurger,
        active:false
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faCloudRain,
        active:false
    },
    
]

console.log(cardsWithActived[0].movie);


export const cards:cardType[] = [
    {
        movie:'cars',
        icon:faBolt
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
        movie:'harry potter',
        icon:faGlasses
    },
    {
        movie:'harry potter',
        icon:faWandMagic
    },
    {
        movie:'harry potter',
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
    {
        movie:'camp rock',
        icon:faGuitar
    },
    {
        movie:'camp rock',
        icon:faHandPeace
    },
    {
        movie:'camp rock',
        icon:faSchool
    },
    {
        movie:'el lobo de wall street',
        icon:faMoneyBillTrendUp
    },
    {
        movie:'el lobo de wall street',
        icon:faDollarSign
    },
    {
        movie:'el lobo de wall street',
        icon:faDog
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faUtensils
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faBurger
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faCloudRain
    },
];

export const cardsI:cardType[] = [
    {
        movie:'cars',
        icon:faBolt
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
        movie:'harry potter',
        icon:faGlasses
    },
    {
        movie:'harry potter',
        icon:faWandMagic
    },
    {
        movie:'harry potter',
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
    {
        movie:'camp rock',
        icon:faGuitar
    },
    {
        movie:'camp rock',
        icon:faHandPeace
    },
    {
        movie:'camp rock',
        icon:faSchool
    },
    {
        movie:'el lobo de wall street',
        icon:faMoneyBillTrendUp
    },
    {
        movie:'el lobo de wall street',
        icon:faDollarSign
    },
    {
        movie:'el lobo de wall street',
        icon:faDog
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faUtensils
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faBurger
    },
    {
        movie:'lluvia de hamburguesa',
        icon:faCloudRain
    },
];

// export const cardsI:cardType[] = [...cards]
  
export function generateRandomCards(array: cardType[]) {
    return array.sort(() => Math.random() - 0.5);
}

export function isValuesSuccess(v1:number | '',v2:number | '',v3:number | '', cards:cardType[]) {
    if ( v1 === '' || v2 === '' || v3 === '') {
        return false
    }

    console.log(cards);
    console.log(v1);
    console.log(v2);
    console.log(v3);
    

    return [cards[v1].movie, cards[v2].movie, cards[v3].movie ].every(value => value === cards[v1].movie )
}

export function generatePlayPC(cardCurrent: cardType[], cardBefore: cardType[],attempsPC:(number | string)[]):number {
    let isFound = false;
    let indexR = 0
    const randomBase = Math.round(Math.random()* 6);

    while (!isFound) {
       const randomIndex = Math.round(Math.random() * (cardCurrent.length - 1) );
       const newIndex = cardBefore.findIndex(card => card.movie === cardCurrent[randomIndex].movie)
        if (newIndex === -1) {
            if (!(attempsPC.includes(randomIndex))) {
                if ((randomBase === 2 || randomBase === 1) && attempsPC[0] !== '' ) {
                
                  const i = cardCurrent.findIndex((card,index) => (card.movie === cardCurrent[attempsPC[0] as number].movie && index !== attempsPC[0] )  ) 
                    
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