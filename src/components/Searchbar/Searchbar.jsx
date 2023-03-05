import React, { Component } from 'react';
import toast from 'react-hot-toast';
// import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({
      query: value,
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (!this.state.query) {
      toast.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    this.props.onSearch(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // name="query"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }

  //   render() {
  //     const { name, number } = this.state;
  //     return (
  //       <form className={css.form} onSubmit={this.handleFormSubmit}>
  //         <label className={css.field}>
  //           Name
  //           <input
  //             type="text"
  //             name="name"
  //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //             required
  //             value={name}
  //             onChange={this.handleChange}
  //           />
  //         </label>
  //         <label className={css.field}>
  //           Number
  //           <input
  //             type="tel"
  //             name="number"
  //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //             required
  //             value={number}
  //             onChange={this.handleChange}
  //           />
  //         </label>
  //         <button className={css.btn} type="submit">
  //           Add contact
  //         </button>
  //       </form>
  //     );
  //   }
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
