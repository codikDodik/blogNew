/* eslint-disable prettier/prettier */
export const REGISTRATION_DATA = 'REGISTRATION_DATA'

const initialState = {
  fromData: null,
}

const formReducer = (state = initialState, action) => {
  console.log('registration reducer', action)
  switch (action.type) {
    case 'REGISTRATION_DATA':
      return {
        ...state,
        fromData: action.payload,
      }
    default:
      return state
  }
}

export { formReducer }
