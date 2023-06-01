
function Scooter(year, color, model){
  this.year = year;
  this.color = color;
  this.model = model;
}

function Driver(name, age, experience){
  this.name = name;
  this.age = age;
  this.experience = experience;
}

function PickupLocation(adress, city){
  this.address = adress;
  this.city = city;

  
  // Create a scooter instance
const scooter = new Scooter(2021, 'Red', 'ABC123');
console.log(scooter.year);   // Output: 2021
console.log(scooter.color);  // Output: Red
console.log(scooter.model);  // Output: ABC123

// Create a driver instance
const driver = new Driver('John Doe', 30, '5 years');
console.log(driver.name);       // Output: John Doe
console.log(driver.age);        // Output: 30
console.log(driver.experience); // Output: 5 years

// Create a pickup location instance
const pickupLocation = new PickupLocation('123 Main St', 'New York');
console.log(pickupLocation.address);  // Output: 123 Main St
console.log(pickupLocation.city);     // Output: New York
