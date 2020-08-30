const users = [
    { name: 'ld', premium: true },
    { name: 'giang', premium: false },
    { name: 'ldk', premium: true },
    { name: 'g', premium: true },
    { name: 'gi', premium: false },
];

const getPremUsers = (users) => {
    return users.filter(user => user.premium);
}

// export 1 file
// export default users;
export { getPremUsers, users as default }