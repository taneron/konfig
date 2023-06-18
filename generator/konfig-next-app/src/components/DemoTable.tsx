import { useEffect, useState } from "react";
import {
  Text,
  createStyles,
  Table,
  ScrollArea,
  rem,
  Center,
  Group,
  UnstyledButton,
  TextInput,
  Box,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
  IconChevronUp,
  IconChevronDown,
  IconSelector,
  IconSearch,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },

  th: {
    padding: "0 !important",
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size="0.9rem" stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function filterData(data: Record<string, unknown>[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => {
      const cell = item[key];
      return typeof cell === "string"
        ? cell.toLowerCase().includes(query)
        : false;
    })
  );
}

function sortData(
  data: Record<string, unknown>[],
  payload: { sortBy: string | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      const bCell = b[sortBy];
      const aCell = a[sortBy];
      if (typeof aCell !== "string") return 1;
      if (typeof bCell !== "string") return -1;
      if (payload.reversed) {
        return bCell.localeCompare(aCell);
      }

      return aCell.localeCompare(bCell);
    }),
    payload.search
  );
}

interface Props {
  data: Record<string, unknown>[];
  columns: string[];
}

export function DemoTable({ data, columns }: Props) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);

  // Update the sorted data to new data whenever it is updated
  useEffect(() => {
    setSearch("");
    setSortedData(data);
  }, [data]);

  const [sortBy, setSortBy] = useState<string | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: string) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row, i) => (
    <tr key={i}>
      {columns.map((column) => {
        const cell: any = row[column];
        return <td key={column}>{cell}</td>;
      })}
    </tr>
  ));

  return (
    <Box>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <ScrollArea
        h={300}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table withColumnBorders miw={700}>
          <thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <tr>
              {columns.map((column) => (
                <Th
                  key={column}
                  sorted={sortBy === column}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting(column)}
                >
                  {column}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <tr>
                <td colSpan={Object.keys(data[0]).length}>
                  <Text weight={500} align="center">
                    Nothing found
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
}
