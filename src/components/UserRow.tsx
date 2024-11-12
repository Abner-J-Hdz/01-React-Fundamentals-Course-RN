import { User } from "../interfaces";

interface Props{
    user:User
}

export const UserRow = ( {user}: Props) => {

    const { email, first_name, last_name, avatar} = user;
  
    return (
      <tr >
          <td>
              <img style={{widows:'50px'}} src={avatar} alt="User Avatar" />
          </td>
          <td>{first_name} {last_name}</td>
          <td>{email}</td>
      </tr>
    )
  }
