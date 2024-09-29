function airplane(name) {
    let isFlying = true
    return {
        takeOff: function() {
            return `${name} takes off`
        },
        land: function () {
            isFlying = false
            return `${name} lands`
        }
    }
}
const result = airplane('e47')
console.log(result.takeOff())