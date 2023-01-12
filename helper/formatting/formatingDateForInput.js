const dateFormatForEdit = (value) => {

    return value.toLocaleString('id', { year: "numeric", month: "2-digit", day: "2-digit" }).split('/').reverse().join('-')

}

module.exports = dateFormatForEdit