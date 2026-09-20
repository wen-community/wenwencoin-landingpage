// Minimal typing for the Jupiter Plugin script (https://plugin.jup.ag/plugin-v1.js).
// Only the options this site uses are declared; the full list lives at
// https://developers.jup.ag/docs/tool-kits/plugin/customization

type JupiterPluginProps = {
  displayMode: 'modal' | 'integrated' | 'widget'
  integratedTargetId?: string
  widgetStyle?: {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    size?: 'sm' | 'default'
  }
  formProps?: {
    initialInputMint?: string
    initialOutputMint?: string
    fixedMint?: string
    swapMode?: 'ExactInOrOut' | 'ExactIn' | 'ExactOut'
    initialAmount?: string
    fixedAmount?: boolean
    referralAccount?: string
    referralFee?: number
  }
  branding?: { logoUri?: string; name?: string }
  containerClassName?: string
  autoConnect?: boolean
}

interface Window {
  Jupiter?: {
    init: (props: JupiterPluginProps) => void
    close: () => void
    resume: () => void
    syncProps: (props: Partial<JupiterPluginProps>) => void
  }
}
