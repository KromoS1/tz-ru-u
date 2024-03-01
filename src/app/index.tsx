import {RootNavigation} from './navigation';
import {withProviders} from './providers';

const Main = () => {
  return (
    <>
      <RootNavigation />
    </>
  );
};

export default withProviders(Main);
