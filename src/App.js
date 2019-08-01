import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuilder/>
        </Layout>
      </div>
    )
  }
}