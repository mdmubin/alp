import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Mohammed Mubin',
    username: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Alice Wonderland',
    username: 'alice',
    email: 'alice@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Harry Houdini',
    username: 'houdini',
    email: 'houdini@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;
