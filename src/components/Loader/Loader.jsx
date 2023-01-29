import { Vortex } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

export default function Loader() {
  return (
    <Loading>
      <Vortex
        visible={true}
        height="60"
        width="60"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </Loading>
  );
}
