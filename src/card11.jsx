function Card1(props={id:1}){
    return(<div className="card1-card">
        <div className="card-body">
            
            <h2 className="card-title2">{props.title}</h2>
            <div className='card1'>
            <h2 className="card1">{props.rub}</h2>
            <h1 className="card1">{props.main}</h1>
            </div>
            <h3 className="card-p">{props.p}</h3>
            <p className="card-text">{props.description}</p>
        </div>
        
        </div>);
};
export default Card1