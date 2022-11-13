import { useRouter, usePathname, useSearchParams } from "next/navigation";

type SearchParams<T extends object> = {
  [key in keyof T]: string;
};
export function useReplaceableParams<T extends object>(...params: (keyof T)[]): {
  values: SearchParams<T>;
  replace: (values: SearchParams<T>) => void;
} {
  const searchParams = useSearchParams();
  const allParams = Object.fromEntries(searchParams.entries());
  const selectedParams = Object.fromEntries(
    Array.from(searchParams.entries()).filter(([k]) =>
      params.includes(k as keyof T)
    )
  ) as SearchParams<T>;
  const router = useRouter();
  const pathname = usePathname()!;
  return {
    values: selectedParams,
    replace(values: SearchParams<T>) {
      const newQuery = Object.entries({
        ...allParams,
        ...values
      })
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      router.push(`${pathname}?${newQuery}`);
    },
  };
}
