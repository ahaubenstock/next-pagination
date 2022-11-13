"use client";

import classNames from "classnames";
import Image from "next/image";
import { useReplaceableParams } from "../../utils/navigation";

export default function Pagination({
  numberOfPages,
}: {
  numberOfPages: number;
}) {
  const {
    values: { page },
    replace,
  } = useReplaceableParams("page");
  const offsetPageAndReload = (offset: number) => {
    const newPage = Math.min(numberOfPages, Math.max(1, +page + offset));
    replace({ page: newPage.toString() });
  };
  const decrementPage = () => offsetPageAndReload(-1);
  const incrementPage = () => offsetPageAndReload(1);
  const chevronSizeProps = { width: 15, height: 15 };
  const leftArrowHidden = +page === 1;
  const rightArrowHidden = +page >= numberOfPages;
  const pageNumberHidden = numberOfPages <= 1;
  return (
    <span className="flex space-x-2">
      <button
        onClick={decrementPage}
        className={classNames({
          hidden: leftArrowHidden,
        })}
      >
        <Image src="/left-chevron.svg" alt="decrement" {...chevronSizeProps} />
      </button>
      <span
        className={classNames("text-xl", {
          hidden: pageNumberHidden,
        })}
      >
        {page}
      </span>
      <button
        onClick={incrementPage}
        className={classNames({
          hidden: rightArrowHidden,
        })}
      >
        <Image src="/right-chevron.svg" alt="increment" {...chevronSizeProps} />
      </button>
    </span>
  );
}
