import users from "../../users.json";

async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return users;
}

export default async function Page() {
  const users = await getUsers();
  return <div>{JSON.stringify(users)}</div>;
}
