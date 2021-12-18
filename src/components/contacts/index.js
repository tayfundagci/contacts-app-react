import {useState, useEffect} from 'react'

import './styles.css'

import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: 'Mehmet',
            phone_number: "0549 457 6541"
        },{
            fullname: 'Ayşe',
            phone_number: "0532 458 2456"
        },{
            fullname: 'Nazlı',
            phone_number: "0553 804 5678"
        },{
            fullname: 'Yasin',
            phone_number: "0553 852 1268"
        },{
            fullname: 'Fatma',
            phone_number: "0553 215 6589"
        },{
            fullname: 'Burak',
            phone_number: "0553 215 6588"
        }
      ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id='container'>
            <h2 className='contacts'>Contacts</h2>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
