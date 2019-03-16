export const addDog = (dog) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'ADD_DOG', dog})
    }
};