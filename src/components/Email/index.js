import React, { Component } from 'react';
import api from '../../services/api';
import { MdSend } from 'react-icons/md';
import { Cms } from '../../constants/components/emailEnum';

import './styles.css';

export default class Email extends Component {
  state = {
    email: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    api.get('email').then(response => {
      const id = response.data.length + 1;
      const request = { id, email: this.state.email }
      console.log(request);
      api.post('email', request);
    });
  }

  handleChange = e => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <article className="email">
        <div className="container">
          <h3>{Cms.title}</h3>
          <span>{Cms.body}</span>
          <form className="input-bar" onSubmit={this.handleSubmit}>
            <input placeholder="Sem span. Pode confiar." type="email" onChange={this.handleChange} />
            <button type="submit">
              <MdSend size={30} color="#999" className="hover-scale" />
            </button>
          </form>
        </div>
      </article>
    );
  }
}