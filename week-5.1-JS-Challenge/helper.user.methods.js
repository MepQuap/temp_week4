class Helpers {
  getUsersByStatus(response, status) {
    const users = [];

    // using for loop method;
    for (let i = 0; i < response.users.length; i++) {
      const user = response.users[i];
      const role = user.role;
      if (
        role.status === status &&
        role.description &&
        role.description.trim() !== ""
      ) {
        users.push(user.name);
      }
    }
    return users;
  }

  // using higher order function;
  //return response.users.filter(user=> user.role.status === status && user.role.description && user.role.description.trim() != "").map(user => user.name);
  
 // }

  getUsersByRole(response, role, roleId) {
   //For Loop method;
    const users = [];
    //Convert input role to lowercase for case-insensitive match
    const targetRole = role.toLowerCase();

    // Loop through each user in the response
    for (let i = 0; i < response.users.length; i++) {
        const user = response.users[i];

        // Make sure user has a role object
        if (user.role) {
            const userRoleName = user.role.name.toLowerCase();
            const userRoleId = user.role.id;

            // Compare role name and role id
            if (userRoleName === targetRole && userRoleId === roleId) {
                users.push(user.name);
            }
        }
    }
      return users;
  }

// //using higher order function.
// return response.users
// .filter(user =>
//     user.role &&
//     user.role.name.toLowerCase() === role.toLowerCase() &&
//     user.role.id === roleId
// )
// .map(user => user.name);
// }



  getUsersByEmailDomain(response, domain) {
  
//     // using for loop;
//     const users = [];
//     const targetDomain = domain.toLowerCase();
//     for (let i = 0; i < response.users.length; i++) {
//         const user = response.users[i];
//         const email = user.email.toLowerCase();

//         // Check if email includes "@<domain>"
//         if (email.includes(`@${targetDomain}`)) {
//             users.push(user.name);
//         }
//     }
//         return users;
//   }

//using higher order function;
const targetDomain = domain.toLowerCase();

return response.users
    .filter(user => user.email.toLowerCase().includes(`@${targetDomain}`))
    .map(user => user.name);
  }

  getUserBalanceByCurrency(response, currency) {
    // //  using For Loop method;
    // const balances = [];
   
    // for (let i = 0; i < response.users.length; i++) {
    //     const user = response.users[i];

    //     if (user.currency === currency) {
    //         // Remove currency symbol and parse to number
    //         const numericBalance = parseFloat(user.balance.replace(/[^0-9.-]+/g, ''));
    //         balances.push(numericBalance);
    //     }
    // }

    // return balances;

    //using higher order function;
    return response.users
    .filter(user => user.currency === currency)
    .map(user => parseFloat(user.balance.replace(/[^0-9.-]+/g, '')));
  }
}

export default new Helpers();
