import {
  MantineTheme,
  MantineThemeColors,
  useMantineTheme,
} from '@mantine/core'
import { generateShadePalette } from './generate-shade-palette'

export function generateMantineThemeColors({
  primaryColor,
  colors,
}: {
  primaryColor?: string
  colors: MantineTheme['colors']
}): {
  colors: Partial<MantineThemeColors>
} {
  return {
    colors: {
      brand:
        primaryColor !== undefined
          ? generateShadePalette(primaryColor)
          : colors.blue,
    },
  }
}
