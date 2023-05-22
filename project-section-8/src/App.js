import React, {useState} from 'react';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';

function App() {
  const sampleUsers = [
    { id: 1, userName: 'Lorem', age: 54 },
    { id: 2, userName: 'Ipsum', age: 23 },
  ];
  const [users, setUsers] = useState(sampleUsers);

  const handleAdd = (userName, age) => {
    const updatedUserList = [
      ...users,
      { id: Date.now, userName: userName, age: age },
    ]

    setUsers(updatedUserList);
  };

  return (
    <div>
      <UserForm onAdd={handleAdd}></UserForm>
      
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
