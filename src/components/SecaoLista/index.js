import React, { Component } from 'react';

import './styles.css';

export default class SecaoLista extends Component {
  hasImage() {
    return this.props.src ?
      <div>
        <img
          src={this.props.src}
          className="rounded-img hover-scale"
          alt={`Imagem de ${this.props.title}`}
          title={this.props.title} />
        <h3>{this.props.title}</h3>
      </div> : null;
  }
	
	render() {
		return (
			<section className={`secao ${this.props.customClass}`}>
        <div className="container flex-column">

          <div>
            {this.props.src ?
            <img
              src={this.props.src}
              className="rounded-img hover-scale"
              alt={`Imagem de ${this.props.title}`}
              title={this.props.title} />
            : null}
            <h3>{this.props.title}</h3>
          </div>

          <div className="paragraphs">
            {this.props.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>
		);
	}

}