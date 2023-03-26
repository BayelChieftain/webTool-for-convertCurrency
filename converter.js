const RATES = {
    usd: 0.014,
    eur: 0.013,
    aud: 0.021,
    som: 1.13,
    byn: 0.033,
    krw: 16.77,
    aed: 0.048,
    egp: 0.40,
    kzt: 5.93,
    thb: 0.44,
    try: 0.25,
    uah: 0.48
};

function convert(rub, currency) {
    if (!RATES[currency]) {
        return null
    }

    return rub * RATES[currency];
};