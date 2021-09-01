import React from "react"
import { Link } from "react-router-dom"
// import { searchMovieTitle } from "./searchMovieTitle"
import { multiSearch } from "./multiSearch"

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: "",
            searchResult: "",
            moviesList: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.populateList = this.populateList.bind(this)
    }

    handleChange(event) {
        this.setState({
            inputVal: event.target.value
        })
    }

    async handleSubmit(event) {
        event.preventDefault()
        const searchQuery = this.state.inputVal
        const result = await multiSearch(searchQuery)
        const moviesList = result.results
        console.log(moviesList)
        this.setState({
            searchResult: moviesList
        })
        const list = moviesList.map((movie) => <Link to={`/detail/${movie.id}`} key={movie.id}><ResultItem movie={movie}/></Link>)
        this.setState({
            moviesList: list
        })
    }

    populateList() {
        const movies = this.state.moviesList
        console.log(movies)
        console.log(this.state.list)
    }

    render() {
        return (
            <div>
                <div className="search-form-wrap">
                    <form className="search-movie-form form" onSubmit={this.handleSubmit}>
                        <input type={"text"} onChange={this.handleChange} />
                        <input type={"submit"} value={"Search"} />
                    </form>
                </div>
                <div className="result-list">
                    <ResultList movies={this.state.moviesList} />
                </div>
            </div>
        )
    }
}

class ResultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ""
        }
    }

    render() {
        return (
            <div className={"movie-list"}>
                <ul>{this.props.movies}</ul>
            </div>
        )
    }
}

class ResultItem extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const mediaType = this.props.movie.media_type
        if (mediaType === "person" || mediaType === "tv") {

            return (
                    <p>
                        {`(${this.props.movie.media_type}) ${this.props.movie.id}: ${this.props.movie.name}`}
                    </p> 
            )
        } else {

            return (
                <p >
                    {`(${this.props.movie.media_type}) ${this.props.movie.id}: ${this.props.movie?.original_title}`}
                </p>
            )
        }
    }
}


export default SearchForm