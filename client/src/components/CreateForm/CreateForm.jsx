import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postVideogame } from "../../actions/index";
import styles from "./CreateForm.module.css"
import Loader from "../Loader/Loader";


const deleteSelection = (input, sel) => {
    if (input.includes(sel)) {
        const array1 = input.filter((num) => num !== sel);
        return array1;
    } else {
        const array2 = input.concat(sel);
        return array2;
    }
  };

  function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "Name is required";
    } else if (!input.image) {
        errors.image = "An image is required";
    } else if (!input.rating || isNaN(input.rating) || input.rating <= 0 || input.rating > 5.00){
        errors.rating = "Rating is required";
    } else if (!input.released) {
        errors.released = "A date is required";
    } else if (!input.platforms[0]) {
        errors.platforms = "Platforms is required";
    } else if (!input.genres[0]) {
        errors.genres = "Genres is required";
    } else if (!input.description) {
        errors.description = "Description is required";
    } 
    
    return errors;
  }

let platformsOptions = [
    {id: 1, name:"PC"},
    {id: 2, name:"PLAYSTATION 5"},
    {id: 3, name:"XBOX ONE"},
    {id: 4, name:"PLAYSTATION 4"},
    {id: 5, name:"XBOX SERIES S/X"},
    {id: 6, name:"NINTENDO SWITCH"},
    {id: 7, name:"IOS"},
    {id: 8, name:"ANDROID"},
    {id: 9, name:"NINTENDO 3DS"},
    {id: 10, name:"NINTENDO DS"},
    {id: 11, name:"NINTENDO DSI"},
    {id: 12, name:"MACOS"},
    {id: 13, name:"LINUX"},
    {id: 14, name:"XBOX 360"},
    {id: 15, name:"XBOX"},
    {id: 16, name:"PLAYSTATION 3"},
    {id: 17, name:"PLAYSTATION 2"},
    {id: 18, name:"PLAYSTATION"},
    {id: 19, name:"PS VITA"},
    {id: 20, name:"PSP"},
    {id: 21, name:"WII U"},
    {id: 22, name:"WII"},
    {id: 23, name:"GAMECUBE"},
    {id: 24, name:"NINTENDO 64"},
    {id: 25, name:"GAME BOY ADVANCE"},
    {id: 26, name:"GAME BOY COLOR"},
    {id: 27, name:"GAME BOY"},
    {id: 28, name:"SNES"},
    {id: 29, name:"NES"},
    {id: 30, name:"CLASSIC MACINTOSH"},
    {id: 31, name:"APPLE II"},
    {id: 32, name:"COMMODORE / AMIGA"},
    {id: 33, name:"ATARI 7800"},
    {id: 34, name:"ATARI 5200"},
    {id: 35, name:"ATARI 2600"},
    {id: 36, name:"ATARI FLASHBACK"},
    {id: 37, name:"ATARI 8-BIT"},
    {id: 38, name:"ATARI ST"},
    {id: 39, name:"ATARI LYNX"},
    {id: 40, name:"ATARI XEGS"},
    {id: 41, name:"GENESIS"},
    {id: 42, name:"SEGA SATURN"},
    {id: 43, name:"SEGA CD"},
    {id: 44, name:"SEGA 32X"},
    {id: 45, name:"SEGA MASTER SYSTEM"},
    {id: 46, name:"DREAMCAST"},
    {id: 47, name:"3DO"},
    {id: 48, name:"JAGUAR"},
    {id: 49, name:"GAME GEAR"},
    {id: 50, name:"NEO GEO"},
    {id: 51, name:"WEB"},
  ];

function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.genres);
    const [errors, setErrors] = useState({});
    
    
    const [input, setInput] = useState({
        image: '',
        name: '',
        rating: 0,
        released : '',
        genres: [],
        platforms: [],
        description: '',

    });

    function handleGenres(event) {
        setInput({
            ...input,
            genres: deleteSelection(input.genres, event.target.value)
        })
        setErrors(
            validate({
              ...input,
              genres: event.target.value,
            })
        );
        console.log(event.target.value)
    }

    function handlePlatforms(event) {
        setInput({
          ...input,
          platforms: deleteSelection(input.platforms, event.target.value),
        });
        setErrors(
            validate({
              ...input,
              platforms: event.target.value,
            })
        );
         console.log(event.target.value)
    }

      
    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name] : event.target.value,
            
        })
        setErrors(
            validate({
              ...input,
              [event.target.name]: event.target.value,
            })
        );
    };


    function handleSubmit(event) {
        event.preventDefault();
        console.log(input, 'submit')
        dispatch(postVideogame(input));
        alert('Videogame created');
        setInput({
            image: '',
            name: '',
            rating: 0,
            released : '',
            genres: [],
            platforms: [],
            description: '',
        })
        navigate('/home')
       
    };

    useEffect (() => {
        dispatch(getGenres());

    },[dispatch]);

    return (
        <div className={styles.formContainer}>
            <div className={styles.formHome}>
                <Link to='/home' className={styles.formLinkHome}><img src={"https://www.pngmart.com/files/15/Home-Silhouette-PNG-Transparent-Image.png"} width="35" height="35" alt="" /></Link>
            </div>
           {genres ?
           <>
            <div>
                <h1 style={{color: '#fff'}}>Add a missing game</h1>
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className={styles.formBody}>
                    <div className={styles.formFields}>
                        <label className={styles.formNameTitle} htmlFor="nameID">Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="nameID"
                        value={input.name}
                        onChange={(event) => handleChange(event)}
                        placeholder="Add a name"
                        className={styles.formNameInput}
                        />
                        {errors.name && <p className={styles.formErrors}>{errors.name}</p>}
                    </div>


                    <div className={styles.formFields}>
                        <label className={styles.formNameTitle} htmlFor='imgID'>Image</label>
                        <input 
                        type="text" 
                        name="image" 
                        id="imgID"
                        value={input.image}
                        onChange={(event) => handleChange(event)}
                        placeholder="Add an image URL"
                        className={styles.formNameInput}
                        />
                        {errors.image && <p className={styles.formErrors}>{errors.image}</p>}
                    </div>


                    <div className={styles.formFields}>
                        <label className={styles.formRatingTitle}>Rating</label>
                        <input
                        type='number'
                        name='rating'
                        value={input.rating}
                        max = '5.00'
                        min = '1'
                        onChange={(event) => handleChange(event)}
                        placeholder="⭐ -"
                        className={styles.formRatingInput}
                        />
                        {errors.rating && <p className={styles.formErrors}>{errors.rating}</p>}
                    </div>




                    <div className={styles.formFields}>
                        <label className={styles.formReleasedTitle}>Released</label>
                        <input
                        type= 'date'
                        name='released'
                        value= {input.released}
                        onChange={(event) => handleChange(event)}
                        placeholder="Released..."
                        className={styles.formReleasedInput}
                        />
                        {errors.released && <p className={styles.formErrors}>{errors.released}</p>}
                    </div>



                        <label className={styles.formPlatformsTitle}>Platforms</label>
                        <div className={styles.formCheckboxes}>
                            
                            <select onChange={(event) =>  handlePlatforms(event)} className={styles.formPlatformsInput}>
                                <option  disabled selected >Select a platform</option>
                            {platformsOptions.map((p) => (
                                    <option
                                    key={p.id}
                                    name='platforms'
                                    value={p.name}
                                    className={styles.formPlatformsInput}
                                    >
                                    {p.name}
                                    </option>
                            ))}
                            
                            </select>
                            {errors.platforms && <p className={styles.formErrors}>{errors.platforms}</p>}

                    </div>
                            <p className={styles.platP}>{input.platforms.join(', ')}</p>




                        <label className={styles.formGenresTitle}>Genres</label>
                        <div className={styles.formCheckboxes}>
                            <select onChange={(event) => handleGenres(event)} className={styles.formPlatformsInput}>

                            <option  selected disabled>Select a genre</option>
                            {genres.map((g) => (
                                    <option
                                    key={g.id}
                                    name='genres'
                                    value={g.name}
                                    className={styles.formPlatformsInput}
                                    >
                                    {g.name}
                                    </option>
                            ))}
                            </select>
                            {errors.genres && <p className={styles.formErrors}>{errors.genres}</p>}

                            <p className={styles.platP}>{input.genres.join(', ')}</p>
                        </div> 



                        
                    <div className='form-fields'>
                        <label className={styles.formNameTitle}  htmlFor="descID">Description</label>
                        <textarea
                        type= 'text'
                        id="descID"
                        name='description'
                        value= {input.description}
                        onChange={(event) => handleChange(event)}
                        placeholder="Description..."
                        className={styles.InputFormDescription}
                        />
                        {errors.description && <p className={styles.formErrors}>{errors.description}</p>}
                    </div>
                  
                
                    {input.name && input.rating && input.image &&
                    !errors.name && !errors.rating && !errors.image &&
                    !errors.description&& !errors.platforms && !errors.genres
               
                    ? <button className={styles.FormButtonCreate} type="submit"> Create </button> 
                    : <h2 style={{color: 'red'}}>
                    Error: required fields are missing</h2>}

                </div>
            </form>
            </>
         
         
            : <Loader/>           
    } 
            
            {console.log(input)}
        </div>
    )
}

export default Create