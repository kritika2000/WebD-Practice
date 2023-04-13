import User from "@/components/user";
import { useEffect, useState } from "react";

export default function UserList({ users }) {
  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     (async () => {
  //       const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await resp.json();
  //       setUsers(data);
  //     })();
  //   }, []);
  return (
    <>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
