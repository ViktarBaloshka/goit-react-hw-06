import Contact from "../Contact/Contact";
import clsx from "clsx";
import s from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const contactsData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={clsx(s.contactList)}>
      {contactsData.map((contact) => (
        <li className={clsx(s.contactListItems)} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
}
