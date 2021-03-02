import {heroes} from '../data/heores';

export const getHeroById = (publisher) => {

    return heroes.find(heroe => heroe.id === publisher)

}