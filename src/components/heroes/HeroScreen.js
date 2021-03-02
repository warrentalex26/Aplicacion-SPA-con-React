import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({history}) => {

    // const params = useParams();
    // console.log(params.heroeId)

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    // const hero = getHeroById(heroeId);

    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {

        if (history.lenght <= 2) {
            history.push('/')
        }else{
            history.goBack();
        }

    }

    return (
        <div className="row mt-5 ">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img className="img-thumbnail" src={`../assets/heroes/${heroeId}.jpg`} alt={superhero}/>
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item"><b>Alter edo: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                
                <h5 >Characters</h5>
                <p>{characters}</p>
                <button onClick={handleReturn} className="btn btn-outline-info">Regresar</button>
            </div>


        </div>
    )
}
