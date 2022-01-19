import React from 'react'
import {useDispatch} from 'react-redux';
import { filterByPlatform } from '../../actions';
import { platformsOptions } from '../CreateForm/CreateForm'

function Platforms() {

    const dispatch = useDispatch();
    
    function handleFilterPlatforms(event) {
        dispatch(filterByPlatform(event.target.value))
    }


    return (
        <div style={{height: '100px'}}>
            
        <select onChange={(event) => handleFilterPlatforms(event)} defaultValue={''}>
          <option value={''} disabled>Filter by platform</option>
          <option value={'All'}>All</option>
          {platformsOptions &&
            platformsOptions.map((g) => {
              return (
                <option key={g.id} value={g.name}>
                  {g.name}
                </option>
              );
            })}
      </select>
        </div>
    )
}

export default Platforms
