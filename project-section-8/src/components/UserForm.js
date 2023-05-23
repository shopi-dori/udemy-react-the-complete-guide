import { useState } from 'react';

import { Card } from './Card';
import { Warning } from './Warning';

export function UserForm({ onAdd }) {
  const [newUserAge, setNewUserAge] = useState('');
  const [newUserName, setNewUserName] = useState('');

  const [warning, setWarning] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    const isValid = validateUser();

    if (isValid) {
      onAdd(newUserName, newUserAge);

      clearUser();
    }
  };

  const clearUser = () => {
    setNewUserAge('');
    setNewUserName('');
  };

  const validateUser = () => {
    let isValid = true;

    if (!newUserName && !newUserAge) {
      setWarning('Please provide a user name and age');
      isValid = false;
    } else if (!newUserName) {
      setWarning('Please provide a user name');
      isValid = false;
    } else if (!newUserAge) {
      setWarning('Please provide a user age');
      isValid = false;
    } else {
      const numericAge = Number(newUserAge);

      if (!numericAge || numericAge < 0) {
        setWarning('Please provide an age greater than or equal to zero');
        isValid = false;
      }
    }

    return isValid;
  };

  const handleUserNameChange = (event) => {
    setNewUserName(event.target.value);
  };

  const handleUserAgeChange = (event) => {
    setNewUserAge(event.target.value);
  };

  const handleClose = () => {
    setWarning(null);
  };

  return (
    <>
      <Card title={"New User"}>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="userNameInput">User Name</label>
            <div>
              <input
                id="userNameInput"
                type="text"
                value={newUserName}
                onChange={handleUserNameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ageInput">Age</label>
            <div>
              <input
                id="ageInput"
                type="number"
                value={newUserAge}
                onChange={handleUserAgeChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn-primary">
              Add
            </button>
          </div>
        </form>
      </Card>

      {warning ? (
        <Warning warning={warning} onClose={handleClose}></Warning>
      ) : null}
    </>
  );
}
