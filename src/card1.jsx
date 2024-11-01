import './card.modules.css'


function Card1(props) {
    return (
        <div className="card">
            <div className="card-body">
                
                <h2 className="card-title">{props.title}</h2>
                <div className='card-main'>
                <h2 className="card-main">{props.rub}</h2>
                <h1 className="card-main">{props.main}</h1>
                </div>
                <h3 className="card-p">{props.p}</h3>
                <p className="card-text">{props.description}</p>
            </div>
            
            </div>
    );
}
export default Card1