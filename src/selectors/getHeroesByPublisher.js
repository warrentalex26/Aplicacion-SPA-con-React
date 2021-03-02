import {heroes} from '../data/heores';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`publisher ${publisher} no es correcto`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)


}