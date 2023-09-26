import { REGISTRATION_DATA } from '../reducers/registration.reducer'

export const signUpInfo = (payload) => {
  return {
    type: REGISTRATION_DATA,
    payload,
  }
}
