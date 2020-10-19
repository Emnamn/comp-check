import React, { Component } from 'react';
import image from '../../image.jpg';
export default class ProfilPhoto extends Component {
  render() {
    return (
    
        <div className="image">
          <img src={image} width="100" height="100" alt ="attribut"/>
        </div>
      
    );
  }
}