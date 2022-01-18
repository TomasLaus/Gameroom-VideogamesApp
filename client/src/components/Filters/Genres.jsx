import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { filterByGenre, getGenres } from '../../actions/index';




function Genres() {
    
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    
    function handleGenre(event) {
        dispatch(filterByGenre(event.target.value))
    }

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch])

    return (
        <div style={{height: '100px'}}>
            
        <select onChange={(event) => handleGenre(event)} defaultValue={''}>
          <option value={''} disabled>Filter by genre</option>
          <option value={'todos'}>All</option>
          {genres &&
            genres.map((g) => {
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

export default Genres





