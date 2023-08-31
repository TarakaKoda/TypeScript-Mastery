// sometimes we need to limit the values that we assign to the variables than we use literal types

type Quantity = 50 | 100;
let quantity: Quantity = 50;

// not only numbers we can do any type

type Metric = 'cm' | 'inc';

function calculateHeight(height: number, system: Metric): string {
    return `height: ${height} in ${system}`
}
