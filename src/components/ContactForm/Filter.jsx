// import { Component } from "react";
import { BiSearchAlt2 } from 'react-icons/bi';
import css from 'components/ContactForm/Filter.module.css'

export const Filter = ({filter, onChange}) => {
  return (
    <div>
      <div className={css.filterContainer} >
        <h3 className={css.filterTitle} >Find contacts by name</h3>
        <BiSearchAlt2 className={css.iconFilter} />
        <input
         className={css.filterInput} 
         type="text"
         name="name"
         value={filter}
         onChange={e => onChange(e.currentTarget.value)}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
      </div>
    </div>
  );
};
