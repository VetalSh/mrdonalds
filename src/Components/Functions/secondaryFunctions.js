export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = value => value.toLocaleString('uah',
    { style: 'currency', currency: 'UAH' });