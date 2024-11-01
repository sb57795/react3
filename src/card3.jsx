import './card.modules.css'


function Card3(props) {
    return (
        <div className="card3-card">
            <div className="card-body">
                
                <h2 className="card-title3">{props.title}</h2>
                <div className='card3'>
                <h2 className="card3">{props.rub}</h2>
                <h1 className="card3">{props.main}</h1>
                </div>
                <h3 className="card-p">{props.p}</h3>
                <p className="card-text">{props.description}</p>
            </div>
            
            </div>
    );
}
export default Card3