export default function logger(reducer) {
    return (prevstate, action, args) => {
        const nextState = reducer(prevstate, action, args)
        return nextState
    }
}