import './Film.css';

function Film(props)
{
    function rezerwuj(e)
    {
        let s = "Rezerwacja na film " + props.film.tytul + " godzina " + e;
        alert(s);
    }
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
                {props.film.typ.map((e) => 
                  <p key={e} className={e}>{e}</p> 
                )}
            </div>
            <div className='godziny'>
                {props.film.godzina.map((e) =>
                    <p key={e} className='godzina' onClick={()=>rezerwuj(e)}>{e}</p>
                )}
            </div>  
            <div className='pusty'></div>          
        </div>
    );
};
export default Film;