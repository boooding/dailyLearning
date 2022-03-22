// ES8
const obj = {
    name: 'booding',
    dancing: 'house'
}
console.log(Object.getOwnPropertyDescriptors(obj))
/**
 name: {
    value: 'booding',
    writable: true,
    enumerable: true, for in
    configurable: true, deletable
  }
 */
Reflect.defineProperty(obj, 'name', {
    value: 'booding',
    writable: true,
    enumerable: true
})
