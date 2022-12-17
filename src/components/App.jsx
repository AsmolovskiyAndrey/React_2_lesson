import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';

export const App = () => {
  return (
    <>
      <Dropdown />
      <Counter initialValue={10} />
    </>
  );
};
