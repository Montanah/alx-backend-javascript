import { createUser } from "./utils";

export default function signUpUser(firstName, lastName) {
    return createUser(firstName, lastName)
        .then((user) => {
        console.log(`${user.firstName} ${user.lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
}