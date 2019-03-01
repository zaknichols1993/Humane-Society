const initState = {
    dogs: [
        {id: '1', name: 'Jerry', gender: 'male', age: '8', breed: 'Pitbull'},
        {id: '2', name: 'Lady Bird', gender: 'female', age: '5', breed: 'Basset Hound'},
        {id: '3', name: 'Coffee', gender: 'male', age: '3', breed: 'Chihuahua'}
    ]
};

const dogReducer = (state = initState, action) => {
    return state
}

export default dogReducer;