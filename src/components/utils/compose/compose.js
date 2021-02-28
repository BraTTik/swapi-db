export const compose = (...funcs) => (component) => {
    return funcs.reduceRight((prevValue, f) =>  f(prevValue), component)
}
