import React, {useMemo } from 'react';

import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)
    console.log(q)

    const [inputName, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = inputName;
    
    const heroesFilter = useMemo( () => getHeroByName(q), [q]);//Esto se va a disparar solo cuando el query cambie, osea que recarge

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }
    console.log(q)

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Find your Hero"
                            type="text"
                            name='searchText'
                            className="form-control"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-block mt-2 btn-outline-primary">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr />

                    { (q === '') &&
                        <div className="alert alert-info">
                        Search a Hero
                        </div>
                    }

                    {
                        heroesFilter.map(hero => (<HeroCard key={hero.id} {...hero} />))
                    }
                </div>
            </div>
        </div>
    )

}