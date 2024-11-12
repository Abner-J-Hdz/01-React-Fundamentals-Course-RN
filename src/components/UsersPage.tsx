import { useUSer } from "../hooks/useUSer";
import { UserRow } from "./";

export const UsersPage = () => {

  const { users, nextPage, previousPage } = useUSer();

  return (
    <>
        <h3>Usuarios</h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>

            </thead>

            <tbody>
                {
                    users.map(user => (
                        <UserRow key={user.id} user={user} />
                    ))
                }

            </tbody>
        </table>
        <div>
            <button onClick={previousPage}>Prev</button>&nbsp;
            <button onClick={nextPage}>Next</button>
        </div>
    </>
  )
}
