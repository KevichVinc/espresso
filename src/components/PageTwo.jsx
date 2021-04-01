import { NavLink } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

function PageTwo(props) {
  const { data } = props;
  return (
    <div className='page2'>
      <Table className='table' size='sm' bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <NavLink to='/'>
        <Button variant='secondary'>Back to Page 1</Button>
      </NavLink>
    </div>
  );
}

export default PageTwo;
