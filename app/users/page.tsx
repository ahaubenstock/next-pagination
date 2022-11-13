import users from "../../users.json";
import classnames from "classnames";
import Pagination from "./Pagination";

async function getUsers(page: number, pageSize: number, filter: string) {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 1000 + 100)
  );
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return users.filter(({ id }) => id.includes(filter)).slice(start, end);
}

export default async function Page({
  searchParams: { page, pageSize, filter },
}: {
  searchParams: {
    page: string;
    pageSize: string;
    filter: string;
  };
}) {
  const users = await getUsers(+page, +pageSize, filter);
  const noUsersHidden = 0 < users.length;

  return (
    <table className="table-auto shadow-md rounded-sm bg-white w-[500px]">
      <thead>
        <tr>
          <th className="text-left p-4">User ID</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id }) => (
          <tr key={id}>
            <td className="text-left border-t border-t-slate-400 p-4">{id}</td>
          </tr>
        ))}
        <tr
          className={classnames({
            hidden: noUsersHidden,
          })}
        >
          <td className="text-left border-t border-t-slate-400 p-4">
            NO USERS
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="p-4 flex justify-end border-t border-t-slate-400">
            <Pagination />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
