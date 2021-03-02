import { heroes } from "../data/heores"


export const getHeroByName = (name='') => {

    
    name = name.toLocaleLowerCase();//Pasarlo a minuscula
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}