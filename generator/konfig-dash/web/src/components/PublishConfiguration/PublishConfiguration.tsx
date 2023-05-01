import { forwardRef, useState } from 'react'
import {
  Stepper,
  Button,
  Group,
  Select,
  Text,
  ThemeIcon,
  SegmentedControl,
  ScrollArea,
  Box,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import { IconManualGearbox, IconSteeringWheel } from '@tabler/icons'

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.ReactNode
  image: string
  color: string
  label: string
  description: string
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ icon, color, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
)

const NUM_STEPS = 3

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const PrismWrapper = ({ children }: { children: string }) => {
  return (
    <Prism
      styles={(theme) => ({
        scrollArea: {
          maxHeight: '500px',
          '.mantine-ScrollArea-root': {
            borderRadius: theme.radius.sm,
          },
          '.mantine-ScrollArea-thumb': {
            backgroundColor: theme.colors.dark[2],
          },
          '> div': {
            width: '100%',
          },
        },
      })}
      scrollAreaComponent={ScrollArea.Autosize}
      colorScheme="dark"
      withLineNumbers
      language="yaml"
    >
      {children}
    </Prism>
  )
}

const PublishConfiguration = ({
  spec,
  konfig,
}: {
  spec: string
  konfig: string
}) => {
  const [active, setActive] = useState(0)
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState<string>('manual')
  const nextStep = async (delay?: boolean) => {
    if (delay) {
      setLoading(true)
      await sleep(1500)
      setLoading(false)
    }
    setActive((current) => (current < NUM_STEPS ? current + 1 : current))
  }
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <>
      <SegmentedControl
        mb="lg"
        value={type}
        onChange={setType}
        data={[
          { label: 'Manual', value: 'manual' },
          { label: 'Trigger', value: 'trigger' },
        ]}
      />
      <Stepper active={active} onStepClick={setActive} breakpoint="xs">
        <Stepper.Step
          label="OpenAPI Specification"
          description="Step 1 - Confirm"
        >
          <PrismWrapper>{spec}</PrismWrapper>
        </Stepper.Step>
        <Stepper.Step label="konfig.yaml" description="Step 2 - Confirm">
          <PrismWrapper>{konfig}</PrismWrapper>
        </Stepper.Step>
        <Stepper.Step
          label="Publish"
          description="Final step"
          loading={loading}
        >
          <Text>Choose how to publish your SDK</Text>
          <Select
            defaultValue="default"
            placeholder="Choose how to publish the SDKs"
            itemComponent={SelectItem}
            data={[
              {
                icon: <IconSteeringWheel />,
                label: 'Default',
                value: 'default',
                description: 'Let Konfig publish your SDKs (Easy)',
              },
              {
                icon: <IconManualGearbox />,
                label: 'Custom',
                color: 'gray',
                value: 'custom',
                description:
                  'When you want to use your own package manager or credentials',
              },
            ]}
          />
        </Stepper.Step>
        <Stepper.Completed>
          <Box>
            <Text>Congratulations, your SDKs are published!</Text>
          </Box>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {active < NUM_STEPS && (
          <Button
            loading={loading}
            onClick={() => nextStep(active === NUM_STEPS - 1)}
          >
            {active < NUM_STEPS - 1 ? 'Confirm' : 'Publish'}
          </Button>
        )}
      </Group>
    </>
  )
}

export default PublishConfiguration
