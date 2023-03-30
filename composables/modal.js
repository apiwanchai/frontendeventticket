export const useLoginModal = () => {
  return useState('loginModal', () => false)
}
export const useRegisterModal = () => {
  return useState('registerModal', () => false)
}
export const useForgotPasswordModal = () => {
  return useState('forgotPasswordModal', () => false)
}
export const useResetPasswordModal = () => {
  return useState('resetPasswordModal', () => false)
}
