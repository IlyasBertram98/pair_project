const formatIdCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
        currency: 'IDR', 
        style: 'currency' 
    }).format(value)
}

module.exports = formatIdCurrency