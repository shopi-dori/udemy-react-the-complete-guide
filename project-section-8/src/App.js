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
    setUsers((previousUsers) => {
      const updatedUserList = [
        ...previousUsers,
        { id: Date.now, userName: userName, age: age },
      ];

      return updatedUserList;
    });
  };

  return (
    <div>
      <UserForm onAdd={handleAdd}></UserForm>
      
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
