export const intialState = null



export const reducer = (state,action) => {

    console.log(action,'this is the action')

    if(action.type === 'USER'){

        return action.payload



    }

    if(action.type === 'CLEAR'){

        return null
    }

      return state


}