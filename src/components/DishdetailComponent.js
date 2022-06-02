import React from 'react';
import { Card, CardSubtitle, CardBody, CardImg, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';



	function RenderComments({comments}) {
		// Destructuring the props for easy access of object.
		const { dish } = this.props;
		return dish.comments ? dish.comments.map(({ id, rating, comment, author, date }) => {
			return (
				<li className="comment mb-4" key={id}>
					<p className="mb-1">{comment}</p>
					<small><i>--{author}</i> - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(date)))}</small>
				</li>
			)
		}) : <div />;
	};

	function RenderDish() {
		// Destructuring the props for easy access of object.
		const { dish } = this.props;
		return (
			<div className='col-12 col-md-5 m-1'>
			<Card>
				<CardImg alt={dish.name} src={dish.image} top width="100%" />
				<CardBody>
					<CardTitle tag="h5"> {dish.name} </CardTitle>
					<CardText> {dish.description} </CardText>
					<CardSubtitle> {dish.price} </CardSubtitle>
				</CardBody>
			</Card>
			</div>
		);
	}

	const DishDetail = (props) => {

		// Destructuring the props for easy access of object.
		const { dish } = this.props;

		if (!dish || dish == null) {
			return <div />;
		}

		return (
			<div className='container'>
				<div className="row">
					{/* Shows the reactstrap card with selected dish image and name */}
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>

					{/* Shows the comments of the selected dish */}
					<div className="col-12 col-md-5 m-1">
						<h4 className="mb-2">Comments</h4>
						<ListGroup>
							<ListGroupItem><RenderComments comments={props.dish.comments} /></ListGroupItem>
						</ListGroup>
					</div>
				</div>
			</div>
		);
	}

export default DishDetail;