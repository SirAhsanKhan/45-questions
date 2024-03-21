//an array of usernames
let userNames: string[] = ["admin", "anas", "ahsan", "arsalan", "wasay"];
userNames.forEach((userName) => {
  if (userName === "admin") {
    console.log(`hello admin, would you like to see status report`);//only for admin
  } else {
    console.log(`hello ${userName}! thanks for logging in again`);//generic message
  }
});
