class Helpers {
    getUsersByAge(response, ageMin, ageMax) {
        const users = [];

        for (let i = 0; i < response.users.length; i++) {
            const user = response.users[i];
            if (user.age >= ageMin && user.age <= ageMax) {
                users.push(user.name);
            }
        }

        // const users = response.users
        // .filter(user => user.age >= ageMin && user.age <= ageMax) // Check age range
        // .map(user => user.name); // Return only user names

        return users;
    }

    getUsersByRole(response, role) {
        const users = [];

        for (let i = 0; i < response.users.length; i++) {
            const user = response.users[i];
            if (user.role === role) {
                users.push(user.name);
            }
        }

      
        // const users = response.users
        //     .filter(user => user.role === role) // Match the role
        //     .map(user => user.name);

        return users;
    }

    getUsersByCountry(response, country) {
        const users = [];

        for (let i = 0; i < response.users.length; i++) {
            const user = response.users[i];
            if (user.country === country) {
                users.push(user.name);
            }
        }

        // const users = response.users
        // .filter(user => user.country === country) // Match the country
        // .map(user => user.name);

        return users;
    }

    getUsersByBalance(response, minBalance, maxBalance) {
        const users = [];

        for (let i = 0; i < response.users.length; i++) {
            const user = response.users[i];
            if (user.balance >= minBalance && user.balance <= maxBalance) {
                users.push(user.name);
            }
        }

        // const users = response.users
        //     .filter(user => user.balance >= minBalance && user.balance <= maxBalance)
        //     .map(user => user.name);

        return users;
    }
}

export default new Helpers();
