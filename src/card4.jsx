import './card.modules.css'


function Card4(props={id:4}) {
    return (
        <div className="card4-card">
            <div className="card-body">
                
                <h2 className="card-title4">{props.title}</h2>
                <div className='card4'>
                <h2 className="card4">{props.rub}</h2>
                <h1 className="card4">{props.main}</h1>
                </div>
                <h3 className="card-p">{props.p}</h3>
                <p className="card-text">{props.description}</p>
            </div>
            
            </div>
    );
}
export default Card4