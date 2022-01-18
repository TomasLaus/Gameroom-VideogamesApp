import React from 'react'
import { useDispatch } from 'react-redux';
import { filterByYear } from '../../actions/index';

function Years() {

    const dispatch = useDispatch();

    function handleYears(event) {
        dispatch(filterByYear(event.target.value))
    }
    
    return (
        <div style={{height: '100px'}}>
            <select onChange={(event) => handleYears(event)} defaultValue={''}>

                <option value='' disabled>Filter by year</option>
                <option value='All'>All</option>
                <option value='1998'>1998</option>
                <option value='2002'>2002</option>
                <option value='2004'>2004</option>
                <option value='2005'>2005</option>
                <option value='2006'>2006</option>
                <option value='2007'>2007</option>
                <option value='2008'>2008</option>
                <option value='2009'>2009</option>
                <option value='2010'>2010</option>
                <option value='2011'>2011</option>
                <option value='2012'>2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                
            </select>
            
        </div>
    )
}

export default Years