import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<div className="form-row d-flex mb-5">
					<div className="col-10">
						<input
							onChange={this.props.searchMovieProp}
							type="text"
							className="form-control"
							placeholder="Search"
						/>
					</div>
					<div className="col-2">
						<button
							type="button"
							className="btn btn-md btn-danger"
							style={{ float: 'right', width: '10rem' }}>
							Add Movie
						</button>
					</div>
				</div>
			</form>
		);
	}
}
export default SearchBar;
