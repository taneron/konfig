import { createStyles, rem } from "@mantine/core";

export const useSubtleLinkStyles = createStyles((theme) => ({
  subtleLink: {
    fontSize: rem(14),
    color: "gray",
    ":hover": {
      color: theme.colorScheme === "dark" ? "lightgray" : "unset",
    },
  },
}));
