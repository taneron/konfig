import { useMediaQuery } from "@mantine/hooks";

export function useMdMediaQuery() {
  // the default "md" breakpoint is 62em
  // https://mantine.dev/styles/responsive/#configure-breakpoints
  return useMediaQuery("(min-width: 62em)");
}
