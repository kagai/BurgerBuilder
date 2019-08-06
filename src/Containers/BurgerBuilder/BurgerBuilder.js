import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends Component {
   
    state ={
        ingredient:{
            salad :1,
            bacon :1,
            cheese :2,
            meat:2

        }
    }

    render() {
        return (
           <Aux>
            <Burger ingredient ={this.state.ingredient}/>
            <div>Build Controls</div>
           </Aux>
        );
    }
}
