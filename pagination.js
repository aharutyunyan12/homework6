function pagination(array, pageSize) {
    let page = 1
    return {
        getPageItems: function () {
            let start = (page - 1) * pageSize
            let end = start + pageSize
            return array.slice(start, end)
        },
        firstPage: function () {
            page = 1
            return this.getPageItems()
        },
        prevPage: function () {
            if (page > 1) page--
            return this.getPageItems()
        },
        lastPage: function () {
            page = Math.round(array.length/pageSize)
            return this.getPageItems()
        },
        nextPage: function () {
            if (page < Math.round(array.length / pageSize)) page++
            return this.getPageItems()
        },
        goToPage: function (thisPage) {
            if (thisPage <= Math.round(array.length / pageSize) && thisPage >= 1) page = thisPage
            return this.getPageItems()
        }
    }
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const result = pagination(alphabetArray, 4)

console.log(result.goToPage(5))
console.log(result.nextPage())
console.log(result.firstPage())
console.log(result.lastPage())
console.log(result.prevPage())
console.log(result.getPageItems())