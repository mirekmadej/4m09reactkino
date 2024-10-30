import './Film.css';

function Film(props)
{
    return(
        <div className="film"> 
            <div className='grafika'>
                <img src={props.film.grafika} alt={props.film.tytul} />
            </div>
            <div className='tytulBlok'>
                <p className='tytul'>{props.film.tytul}</p>
                <p className='opis'>{props.film.opis}</p>
            </div>
            <div className='typ'>
                typ 
            </div>
            <div className='godziny>'>
                godziny
            </div>  
            <div className='pusty'></div>          
        </div>
    );
};
export default Film;