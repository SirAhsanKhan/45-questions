let current_users:string[] = ["bhai","dada","wasay","ahsan"]
let new_users: string[] = ["laiba","bhai","dada","hania"]
new_users.forEach(newUser =>{
   if (current_users.some( current_users => current_users.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a username`)
    } else {
        console.log(`${newUser} is available`)
    }
})