function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.getUTCDate()}!`);
}
greet("Maddison", new Date())