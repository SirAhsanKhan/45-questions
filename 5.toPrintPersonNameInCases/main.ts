let PersonName :string = "ahsan"
//in uppercase
console.log(PersonName.toUpperCase());
//in lowercase
console.log(PersonName.toLowerCase())
//in titlecase (first letter must be capital other remain small)
console.log(PersonName.charAt(0).toUpperCase() + PersonName.slice(1).toLowerCase());