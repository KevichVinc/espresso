import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function PageOne(props) {
  const { setData } = props;

  async function handleData() {
    const someData = await axios.get('https://reqres.in/api/users?page=2');
    const newData = someData.data.data;
    setData(newData);
  }

  function handleStateClearing() {
    setData([]);
  }

  return (
    <div className='page1'>
      <Button className='button' variant='primary' onClick={handleData}>
        Get some data
      </Button>
      <Button className='button' variant='danger' onClick={handleStateClearing}>
        Clear data for page 2
      </Button>
      <NavLink to='/page2'>
        <Button className='button' variant='secondary'>
          Page 2
        </Button>
      </NavLink>
    </div>
  );
}

export default PageOne;
