import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            dish: null
        };
    }

    selectedDish(dish) {
        this.setState({
            dish
        });
    }

    render() {
        // Display's list of dishes
        const allDishes = this.props.dishes ? this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 mt-5" key={dish.id}>
                    <Card onClick={() => this.selectedDish(dish)}>
                        <CardImg alt={dish.name} src={dish.image} top width="100%" />
                        <CardImgOverlay>
                            <CardTitle tag="h5">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }) : null;

        return (
            <div className="container">
                <div className="row mb-4">
                    {allDishes}
                </div>
                {/* Render selected dish component */}
                {
                    this.state.dish && (
                        <DishdetailComponent dish={this.state.dish} />
                    )
                }
            </div>
        );
    }
};

export default Menu;