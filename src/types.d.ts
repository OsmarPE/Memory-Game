import { IconProp } from "@fortawesome/fontawesome-svg-core"


export type moviesType = 'rey leon' | 'cars' | 'spiderman' | 'nemo' | 'harry potter' | 'up' | 'camp rock' | 'el lobo de wall street' | 'lluvia de hamburguesa' |''
export type playerType =  1 | 0 

export interface cardType {
    movie: moviesType,
    icon:IconProp
}

export interface valuesType extends moviesType{
    index:number
}

export interface cardTypeC extends cardType{
    active:boolean
}

export interface validateProps {
    name:'completed' | 'pending',
    isActive: boolean
} 