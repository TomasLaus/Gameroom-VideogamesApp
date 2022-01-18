import {useParams, Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getVideogameDetail } from '../../actions';
import styles from './Details.module.css'
import Loader from '../Loader/Loader';



function Details() {
    const {id} = useParams();
    const dispatch = useDispatch();
        
    useEffect(() => {
        dispatch(getVideogameDetail(id))
    }, [dispatch, id])

    const videogameDetail = useSelector((state) => state.videogameDetail)

    return (
        <div>
            <div className={styles.detailHome}>
                <Link to='/home' className={styles.formLinkHome}><img src={"https://www.pngmart.com/files/15/Home-Silhouette-PNG-Transparent-Image.png"} width="35" height="35" alt="" /></Link>
            </div>
            {!Array.isArray(videogameDetail) ?             
            <div className={styles.DetailContainer}>
                <h1 className={styles.NameTitle}>{videogameDetail.name}</h1>
                <img src={videogameDetail.image} alt={videogameDetail.name} className={styles.imageMain}/>
                <h3 className={styles.RatingsTitle}>Ratings</h3>
                    <p className={
                        videogameDetail.rating > 3.7 ? styles.ratingGood :
                        videogameDetail.rating > 3.10 ? styles.ratingMedium : 
                        styles.ratingBad
                    }>{videogameDetail.rating}</p>
               
               
                {videogameDetail.ratings ? (
                        videogameDetail.ratings.map(p => (
                            <div key={p.id} className={styles.DivRatings}>
                                <span className={
                                    p.title === 'exceptional' ? styles.exceptional : 
                                    p.title === 'recommended' ? styles.recommended :
                                    p.title === 'meh' ? styles.meh :
                                    p.title === 'skip' ? styles.skip : null
                                }> {
                                p.title === 'exceptional' ? '🟢' : 
                                p.title === 'recommended' ? '🟡' :
                                p.title === 'meh' ? '🟠' :
                                p.title === 'skip' ? '🔴' : null}   {p.title} <span className={styles.spanCounts}>   {p.count}</span> </span>
                                
                            </div>
                            ))
                            ) : 
                            <h3 className={styles.WOtrailer}>Without ratings yet</h3>
                }




                <h3 className={styles.DescriptionTitle}>Description</h3>
                <p className={styles.DescriptionP}>{videogameDetail.description}</p>    


                <p className={styles.ReleasedP1}>Release date: </p>
                <p className={styles.ReleasedP2}>{videogameDetail.released}</p>




            <div className={styles.PlatAndGen}>

                    <h3 className={styles.GenresTitles}>Genres</h3>
                    {videogameDetail.genres ? (
                        videogameDetail.genres.map((g, i) => (
                            
                            <p key={i} className={styles.GenresP}>{g}</p>
                        ))
                        ) 
                        : 
                            
                        <h3 className={styles.WOtrailer}>Without genres</h3>
                    }


                    <h3 className={styles.PlatformsTitle}>Platforms</h3>
                    {videogameDetail.platforms ? (
                        videogameDetail.platforms.map((p, i) => (
                            
                            <p key={i} className={styles.PlatformsP}>{p}</p>
                            ))
                            ) : (
                                <h3 className={styles.WOtrailer}>Without platforms yet</h3>
                                )}


            </div>



                <h3 className={styles.ScreenshotsTitle}>Screenshots</h3>
                {videogameDetail.screenshotApi ? (
                        videogameDetail.screenshotApi.map((p, i) => (
                         
                                <img src={p.image} alt={''} className={styles.screenshot} />
                            
                            ))
                            ) : (
                                <h3 className={styles.WOscreenshot}>Without screenshots yet</h3>
                                )}


                <h3 className={styles.TrailerTitle}>Trailer</h3>
                {videogameDetail.trailerApi ? 
                    <video src={videogameDetail.trailerApi.data.max} poster={'https://cdn.vox-cdn.com/thumbor/mK8NS3uZ6CTvaPRlGmBrbsi85AY=/0x0:3000x2000/1200x675/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/60452929/movie_trailer_bracket_editing_getty_ringer.0.jpg'} controls className={styles.trailerVideo}></video>
                             : 
                    <h3 className={styles.WOtrailer}>Without trailer yet</h3>
                }

               
            </div>
               : 
               <Loader/>
               }

            
        </div>
    )
}

export default Details