

function Movie(props) {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    props.img === "N/A" ? <div className="no-image">{props.title}</div> : <img className="activator" src={props.img} alt={props.title}/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.title}</span>
                <p>{props.year} year</p>
            </div>
        </div>
    )
}

export default Movie;