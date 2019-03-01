export const addDog = (dog) => {
    return (dispatch, getState) => {
        dispatch({ type: 'ADD_DOG', dog})
    }
};