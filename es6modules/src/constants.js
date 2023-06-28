const nickname = "springfil";
export default nickname;

export const town = "New York";
export const weather = "zopa";

const value = "to be or not to be";
const VALUE = value.toUpperCase();

export { value, VALUE as valueUpperCase };

export const usersURL = "https://jsonplaceholder.typicode.com/users";

// export function mapUsers(users) = {
//     return users.map( response => {
//         const { id, name, username } = response;
//         return { id, name, username };
//     })
// }
