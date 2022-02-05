import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { contactsOperations } from "redux/contacts";
import s from "./ContactItem.module.css";

function ContactItem({ name, phone, id }) {
  const dispatch = useDispatch();
  const onRemoveContact = () => {
    dispatch(contactsOperations.removeContact(id));
    toast.info(`${name} was removed from contacts`);
  };
  return (
    <li className={s.item}>
      <p>
        {name}: {phone}
      </p>
      <button className={s.btn} type="button" onClick={onRemoveContact}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
export default ContactItem;
