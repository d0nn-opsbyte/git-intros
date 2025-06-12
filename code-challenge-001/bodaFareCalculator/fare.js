function calculatebodaFare() {
    const baseFare = 50;
    const perKilometer = 15;

    let distanceInput = prompt("where to?");
    let distanceInKm = parseFloat(distanceInput);

    if ( distanceInKm < 0) {
        console.log("Invalid input. Please enter a valid number");
        return;
    }

    let totalFare = baseFare + (perKilometer * distanceInKm);
    console.log(`Total fare: ${totalFare}`);
}