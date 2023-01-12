const dateFormat = (value) => {
    return value.toLocaleString('id', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
}

module.exports = dateFormat