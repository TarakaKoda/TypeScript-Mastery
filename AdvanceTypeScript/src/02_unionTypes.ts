function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return 2.2 * weight;
    }
    else {
        return parseInt(weight) * 2.2;
    } 
}

// by using union | operation we can give multiple annotations

