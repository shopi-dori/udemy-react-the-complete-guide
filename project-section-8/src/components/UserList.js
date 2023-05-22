import { Card } from "./Card";

export function UserList({users}) {
  return (
    <Card title={'Users'}>
      {users.map(user => {
        return (
          <Card key={user.id}>
            <div>User Name: {user.userName}</div>
            <div>Age: {user.age}</div>
          </Card>
        );
      })}
    </Card>
  );
}