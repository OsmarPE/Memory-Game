import { IconProp } from "@fortawesome/fontawesome-svg-core"


export type moviesType = 'rey leon' | 'cars' | 'spiderman' | 'nemo' | 'harry' | 'up' | ''
export type playerType =  1 | 0 | null

export interface cardType {
    movie: moviesType,
    icon:IconProp
}

export interface valuesType extends moviesType{
    index:number
}