import React from 'react';
import PlantNav from './navs/PlantNav';

const ToBeWatered = () => {
    return (
        <div>
            <PlantNav />
            <h1>To Be Watered</h1>
            <div>
                <img src='https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt='plant' style={{height: '50vh'}} />
                <h3>Sandra The Plant</h3>
                <p>Erotus Maximus</p>
                <p>Next watering in: 2 days</p>
            </div>
        </div>
    )
}

export default ToBeWatered;
