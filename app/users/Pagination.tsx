"use client";

import Image from "next/image";
import { useReplaceableParam } from "../../utils/routing";

export default function Pagination() {
  const { value, replace } = useReplaceableParam("page");
  const page = +value!;
  const offsetPageAndReload = (offset: number) => {
    replace(`${page + offset}`);
  };
  const decrementPage = () => offsetPageAndReload(-1);
  const incrementPage = () => offsetPageAndReload(1);
  const chevronSizeProps = { width: 15, height: 15 };
  return (
    <span className="flex space-x-2">
      <button onClick={decrementPage}>
        <Image src="/left-chevron.svg" alt="decrement" {...chevronSizeProps} />
      </button>
      <span className="text-xl">{page}</span>
      <button onClick={incrementPage}>
        <Image src="/right-chevron.svg" alt="increment" {...chevronSizeProps} />
      </button>
    </span>
  );
}
