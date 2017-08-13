export const combineReducers = (config) =>{
    return (state, action) => {
        return Object.keys(config).reduce((state, key) => {
            const reducer = config[key];
            const previous = state.get(key);
            const newValue = reducer(previous, action);
            if (!newValue) {
                throw new Error('Reducer returned undefined');
            }
            return state.set(key, newValue);
        }, state)
    }
}
