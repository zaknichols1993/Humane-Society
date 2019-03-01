const initState = {
    dogs: [
        {id: '1', name: 'Jerry', gender: 'male', age: '8', breed: 'Pitbull'},
        {id: '2', name: 'Lady Bird', gender: 'female', age: '5', breed: 'Basset Hound'},
        {id: '3', name: 'Coffee', gender: 'male', age: '3', breed: 'Chihuahua'}
    ]
};

const dogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DOG':
        console.log('added dog', action.dog)
    }
    return state
}

export default dogReducer;