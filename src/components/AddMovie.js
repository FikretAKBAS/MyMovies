import React from 'react';

class AddMovie extends React.Component {
	render() {
		return (
			<div className="container">
				<form className="mt-5">
					<input
						type="text"
						id="disabledInput"
						placeholder="Fill The Form To Add A New Movie"
						disabled
					/>
					<div className="form-row">
						<div className="form-group col-md-10">
							<label htmlFor="inputName">Name</label>
							<input type="text" name="name" className="form-control" />
						</div>
						<div className="form-group col-md-2">
							<label htmlFor="inputRating">Rating</label>
							<input type="text" name="rating" className="form-control" />
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="inputImage">Image URL</label>
								<input type="text" name="imageURL" className="form-control" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="overviewTextarea">overview</label>
								<textarea
									rows="5"
									name="overview"
									className="form-control"></textarea>
							</div>
						</div>
					</div>
					<input
						type="submit"
						className="btn btn-danger btn-block"
						value="Add Movie"
					/>
				</form>
			</div>
		);
	}
}

export default AddMovie;
