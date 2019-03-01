const initState = {
    cats: [
        { id: '1', name: 'JoJo', gender: 'male', age: '3', breed: 'Calico' },
        { id: '2', name: 'Eevee', gender: 'female', age: '5 months', breed: 'Tiger' },
        { id: '3', name: 'Gene', gender: 'male', age: '2', breed: 'Black' }
    ]
}

const catReducer = (state = initState, action) => {
    return state
}

export default catReducer;