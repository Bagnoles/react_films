import Movie from "./Movie";


function MoviesList(props) {
    const { films = [] } = props;
    return (
        <div className="movies-list">
            { films.length === 0 ? (<h4>Nothing found.</h4>) : (
             films.map((item) => {
                return <Movie img={item.Poster} title={item.Title} key={item.imdbID} year={item.Year} />
            }))
            }
        </div>
    )
}

export default MoviesList;