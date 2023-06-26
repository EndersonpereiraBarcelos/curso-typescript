type VerifyUserFn = (user: User, sentValue: User) => boolean; // Typagem da função

type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username &&
        user.password === sentValue.password
    );
};

const dbUser = {
    username: "admin",
    password: "admin",
};

const sentUser = {
    username: "admin",
    password: "admin",
};

const loggedIn = verifyUser(dbUser, sentUser); //verifica se existe ou não o usuario
console.log(loggedIn);
