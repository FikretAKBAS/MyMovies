import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddMovie from './AddMovie';

class App extends React.Component {
	state = {
		movies: [],

		searchQuery: '',
	};

	async componentDidMount() {
		const response = await axios.get('http://localhost:3002/movies');
		//console.log(response);
		this.setState({ movies: response.data });
	}

	// AXIOS API
	deleteMovie = async (movie) => {
		axios.delete(`http://localhost:3002/movies/${movie.id}`);
		const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

		this.setState((state) => ({
			movies: newMovieList,
		}));
	};

	//FETCH API

	// deleteMovie = async (movie) => {
	// 	const baseURL = `http://localhost:3002/movies/${movie.id}`;
	// 	await fetch(baseURL, {
	// 		method: 'DELETE',
	// 	});

	// 	const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
	// 	this.setState((state) => ({
	// 		movies: newMovieList,
	// 	}));
	// };

	searchMovie = (event) => {
		this.setState({
			searchQuery: event.target.value,
		});
	};

	render() {
		let filteredMovies = this.state.movies.filter((movie) => {
			return (
				movie.name
					.toLowerCase()
					.indexOf(this.state.searchQuery.toLowerCase()) !== -1
			);
		});
		return (
			<div className="container">
				<Router>
					<Routes>
						<Route
							exact
							path="/"
							element={
								<MovieList
									movies={filteredMovies}
									deleteMovieProp={this.deleteMovie}
								/>
							}
							render={() => (
								<React.Fragment>
									<div className="row">
										<div className="col-lg-12">
											<SearchBar searchMovieProp={this.searchMovie} />
										</div>
									</div>
								</React.Fragment>
							)}></Route>
						<Route path="/add" element={<AddMovie />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
