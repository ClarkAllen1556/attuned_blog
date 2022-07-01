import { useAppDispatch, useAppSelector } from '~/common/hooks';
import { setCurrentQuery } from '~/features/search/search';

interface Props {
  placeHolder?: string;
}

export default function Search({ placeHolder }: Props) {
  const search = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const debounce = <F extends (...args: any[]) => any>(func: F, ms = 300) => {
    let timer: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  };

  const setSearchValue = debounce((value: string) => {
    dispatch(setCurrentQuery(value));
  });

  return (
    <input
      type="text"
      placeholder={placeHolder}
      onChange={(e) => setSearchValue(e.target.value)}
      className="border-2 p-2 border-sol-grey-2 focus:border-sol-yellow-1 dark:focus:border-sol-blue-1 rounded-md dark:bg-sol-black-2 outline-none"
    />
  );
}
