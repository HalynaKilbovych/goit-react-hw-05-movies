import { Circles } from 'react-loader-spinner'
import { Wrapper } from './Loader.styled';
  
  export const Loader = () => {
    return (
      <Wrapper>
        <Circles
            height="200"
            width="200"
            color="orange"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
      </Wrapper>
    );
  };