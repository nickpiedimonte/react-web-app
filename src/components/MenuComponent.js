import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';


function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg alt={dish.name} src={dish.image} top width="100%" />
            <CardImgOverlay>
                <CardTitle tag="h5">{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    // Display's list of dishes
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 mt-5" >
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row mb-4">
                {menu}
            </div>
        </div>
    );
}



export default Menu;