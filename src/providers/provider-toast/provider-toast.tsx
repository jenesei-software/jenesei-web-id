import { ProviderToastProps } from '.'
import {
  StyledCustomToast,
  StyledCustomToastContent,
  StyledCustomToastContentType,
} from './provider-toast.styles'
import { JeneseiTheme, SpanInterSB14 } from 'jenesei-react-ui'
import { ToastProvider, theme } from 'rc-toastr'
import 'rc-toastr/dist/index.css'
import { Toast } from 'rc-toastr/dist/types'

export const ProviderToast: React.FC<ProviderToastProps> = (props) => {
  return (
    <ToastProvider
      config={{
        renderAs: (props) => <CustomToast {...props} />,
        position: 'bottom-right',
        zIndex: 1000,
      }}
    >
      {props.children}
    </ToastProvider>
  )
}

function CustomToast({
  visible,
  toast,
}: {
  toast: Toast
  onClose: (id: number) => void
  visible: boolean
  showProgressBar: boolean
  progress: number
}) {
  return (
    <StyledCustomToast
      style={{
        backgroundColor: theme.colors[toast.type],
      }}
    >
      {visible && (
        <StyledCustomToastContent>
          <StyledCustomToastContentType>
            {theme.icons[toast.type]}
          </StyledCustomToastContentType>
          <SpanInterSB14 color={JeneseiTheme.colors.white[100]}>
            {toast.message}
          </SpanInterSB14>
        </StyledCustomToastContent>
      )}
    </StyledCustomToast>
  )
}
