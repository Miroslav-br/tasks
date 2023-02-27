export function calculateAllDonates(donates) {
    let sum = 0
    donates.forEach(element => {
        sum += element.amount
    });

    return sum
}