import React from 'react'
import { heroes } from '../../data/heores'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';


export const SearchScreen = () => {

    const [ inputName , handleInputChange] = useForm({
        searchText: '',
    });
    
    

    const {searchText} = inputName;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText)
    }

    const heroesFilter = heroes;
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>search Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Find your Hero"
                        type="text"
                        name='searchText'
                        className="form-control"
                        value={searchText}
                        onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-block m-1 btn-outline-primary">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr/>
                    {
                        heroesFilter.map(hero => (<HeroCard key={hero.id} {...hero}/>))
                    }
                </div>
            </div>
        </div>
    )

}