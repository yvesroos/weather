// eslint-disable-next-line no-undef
let timer: NodeJS.Timer;
const useDebounce = (func: (args_0: any) => void, milliseconds: number) => {
  const time = milliseconds || 400;

  return (event: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};

export default useDebounce;
