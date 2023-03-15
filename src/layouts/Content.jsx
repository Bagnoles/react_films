import React from 'react';
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";
import Preloader from "../components/Preloader";
import Pagination from "../components/Pagination";


const API_KEY = process.env.REACT_APP_API_KEY;

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            loading: true,
            pages: 0
        }
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    films: data.Search,
                    loading: false,
                    pages: Math.ceil(data.totalResults / 10),
                })
            })
    }

    searchingFilms = (value, type) => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}&type=${type}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    films: data.Search,
                    loading: false,
                })
            })
    }

    render () {
        return (
            <main className="main-container container">
                <Search searchingFilms={this.searchingFilms}/>
                {
                    this.state.loading ? <Preloader /> : <MoviesList films={this.state.films} />
                }
                <Pagination pages={this.state.pages} />
            </main>
        )
    }
}

export default Content;