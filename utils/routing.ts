import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function useReplaceableParam(param: string): {
  value: string | null;
  replace: (value: string) => void;
} {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const router = useRouter();
  const pathname = usePathname()!;
  return {
    value: searchParams.get(param),
    replace(value: string) {
      const newQuery = Object.entries({
        ...query,
        [param]: value,
      })
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      router.push(`${pathname}?${newQuery}`);
    },
  };
}
