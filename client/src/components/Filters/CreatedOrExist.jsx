import React from 'react'
import { useDispatch } from 'react-redux';
import { dbOrApi } from '../../actions/index';

function CreatedOrExist() {

    const dispatch = useDispatch();

    function handleDborApi(event) {
        dispatch(dbOrApi(event.target.value))
    }
    
    return (
        <div style={{height: '100px'}}>
            <select onChange={(event) => handleDborApi(event)} defaultValue={''}>

                <option value='' disabled>Filter by origin</option>
                <option value='All'>All</option>
                <option value='created'>Created</option>
                <option value='api'>Api</option>
            </select>
            
        </div>
    )
}

export default CreatedOrExist