export const useTheme = () => {
  const isDarkMode = useState('isDarkMode', () => ['true', null].includes(localStorage.getItem('isDarkMode')))
  watch(isDarkMode, (isDarkMode) => {
    localStorage.setItem('isDarkMode', isDarkMode)
  })
  return {
    isDarkMode,
  }
}
