// import { Component } from "react";
// import PropTypes from 'prop-types';
// npm start
import { IoTrashBin } from "react-icons/io5";
import css from 'components/ContactForm/ContactList.module.css';

export const ContactList = ({ contacts = [], onDelet }) => {
  console.log('contacts', contacts);

  return (<section><div className={css.contactContainer}>
    <h3 className={css.contactHead}>Name</h3>
    <h3 className={css.contactHead}>Number</h3>
    </div>
    <ul className={css['contacts-list']}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
            <p className={css.contactTille}>{name}</p>
            <a className={css.contactLink} href={'tel:' + number}>
          {number}
        </a> 
        <button type="click" className={css.btnIcon}>
       <span className={css.stats}><IoTrashBin className={css.icon}/></span> 
          </button>
        </li>
      ))}
    </ul></section>
  );
};

// export class ContactList extends Component {
//   state = {
//     contacts: {
//       name: '',
//     number: '',}
//   }
//   // state = {
//   //   contacts: [
//   //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   //   ],
//   //   filter: '',
//   // };

// render(){
//   return <ul><li>
//       <p>{this.state.contacts.name}</p>
//       <p>{this.state.contacts.number}</p>
//     </li>
//   </ul>
// }
//  }
