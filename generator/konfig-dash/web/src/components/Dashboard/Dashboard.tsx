import {
  Grid,
  SimpleGrid,
  Skeleton,
  Box,
  useMantineTheme,
  Paper,
} from '@mantine/core'

const PRIMARY_COL_HEIGHT = 600

function Dashboard() {
  const theme = useMantineTheme()
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2

  return (
    <Box mx="md" my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        <Paper withBorder shadow="sm" h={PRIMARY_COL_HEIGHT} radius="md" />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Box>
  )
}
export default Dashboard
