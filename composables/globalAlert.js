// state global alert
export const globalAlert = ref({
  isOpen: null,
  title: null,
  text: null,
  buttonText: null,
  html: null,
  duration: null,
  successCallBack: null,
  actionsPath: null,
  actionsCallBack: null,
  clickOutside: null,
  success: false,
  error: false,
  warning: false,
  info: false,
})

let globalAlertTimeoutID = null

export const useClearAlert = () => {
  globalAlert.value = {}
  clearTimeout(globalAlertTimeoutID)
}

// function set state alobal alert And set timeout
export const useAlert = ({
  isOpen, // open alert
  title, // title alert
  text, // text alert
  buttonText, // text in button
  html, // element
  duration, // time to close
  successCallBack, // use function on success
  actionsPath, // go to path on click button in alert
  actionsCallBack, // use function on click button in alert
  clickOutside, // close click outside if clickOutside = 'none'
  success,
  error,
  warning,
  info,
} = {}) => {
  globalAlert.value = {
    isOpen,
    title,
    text,
    buttonText,
    html,
    duration,
    successCallBack,
    actionsPath,
    actionsCallBack,
    clickOutside,
    success,
    error,
    warning,
    info,
  }
  if (!actionsCallBack && duration !== 'none' && !actionsPath && !buttonText) {
    globalAlertTimeoutID = setTimeout(() => {
      globalAlert.value?.successCallBack && globalAlert.value?.successCallBack()
      useClearAlert()
    }, duration || 3000)
  }
}
