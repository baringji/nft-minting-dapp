import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export const defaultConfig = defineConfig<{}>({
  details: true,
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
})

export default defineConfig<{}>({
  ...defaultConfig,
  presets: [
    ...defaultConfig.presets as any,
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        heading: 'Orbitron',
        sans: 'Urbanist',
        serif: 'Noto Sans Serif',
      },
    }),
  ],
  shortcuts: [],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
})
