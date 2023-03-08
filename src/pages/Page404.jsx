import { toast } from 'react-toastify';
import img404 from '../images/img404.jpg';

export const Page404 = () => {
    toast("Take me home");

  return (
    <div>
    <h2 style={{fontSize: '90px', textAlign: 'center', margin: '10px'}}>404</h2>
    <p style={{textAlign: 'center'}}>Sorry, we can't find this page! But don't worry, it's still great!</p>
      <img
        src={img404}
        alt="404"
        style={{ display: 'block', margin: 'auto' }}
      />
    </div>
  );
};