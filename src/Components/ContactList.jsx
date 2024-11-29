import { useState } from "react";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";

const initState = [
  {
    id: 1,
    first_name: "Albert",
    last_name: "betin",
    phone: "+91-2345123456",
  },
  {
    id: 2,
    first_name: "Alok",
    last_name: "latin",
    phone: "+91-2345123456",
  },
];

export default function ContactList() {
  const [contactList, setContactList] = useState(initState);
  const handleClick = (name, phone) => {
    setContactList([
      ...contactList,
      {
        id: contactList[contactList.length - 1].id + 1,
        first_name: name,
        last_name: "",
        phone: phone,
      },
    ]);
  };
  const deleteById = (id) => {
    console.log(id);
    setContactList(contactList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <AddContact handleClick={handleClick} />
      <br />
      {contactList.map((item) => (
        <div key={item.id}>
          <ContactCard
            id={item.id}
            name={item.first_name}
            phone={item.phone}
            onDelete={deleteById}
          />
        </div>
      ))}
    </div>
  );
}
