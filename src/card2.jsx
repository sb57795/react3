import './card.modules.css'


function Card2(props) {
    return (
        <div className="card2-card">
            <div className="card-body">
                
                <h2 className="card-title2">{props.title}</h2>
                <div className='card6'>
                <h2 className="card6">{props.rub}</h2>
                <h1 className="card6">{props.main}</h1>
                </div>
                <h3 className="card-p">{props.p}</h3>
                <p className="card-text">{props.description}</p>
            </div>
            
            </div>
    );
}
export default Card2