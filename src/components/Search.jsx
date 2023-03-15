import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "",
        }
    }

    handleSearch = (e) => {
        if (e.code === 'Enter') {
            this.props.searchingFilms(this.state.search, this.state.type);
        }
    }
    radioHandler = (e) => {
        this.setState({ type: e.target.value });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="search"
                            type="search"
                            className="validate"
                            placeholder="matrix"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleSearch}
                        />
                        <a
                            className="waves-effect waves-light btn search-btn"
                            onClick={()=>{this.props.searchingFilms(this.state.search, this.state.type)}}
                        >Search</a>
                    </div>
                </div>
                <div className="row radio-btns">
                    <p>
                        <label>
                            <input name="type" type="radio" value="" onChange={this.radioHandler}/>
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="type" type="radio" value="movie" onChange={this.radioHandler}/>
                            <span>Movies</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="type" type="radio" value="series" onChange={this.radioHandler}/>
                            <span>Series</span>
                        </label>
                    </p>
                </div>
            </>
        )
    }
}

export default Search;