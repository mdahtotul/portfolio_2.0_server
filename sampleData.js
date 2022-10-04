const projects = [
  {
    id: "1",
    clientId: "2",
    name: "Project 1",
    description: "Project 1 description",
    status: "In progress",
  },
  {
    id: "2",
    clientId: "5",
    name: "Project 2",
    description: "Project 2 description",
    status: "Completed",
  },
  {
    id: "3",
    clientId: "4",
    name: "Project 3",
    description: "Project 3 description",
    status: "Architecture done",
  },
  {
    id: "4",
    clientId: "1",
    name: "Project 4",
    description: "Project 4 description",
    status: "Hosting in progress",
  },
  {
    id: "5",
    clientId: "3",
    name: "Project 5",
    description: "Project 5 description",
    status: "Initiated",
  },
];

const clients = [
  {
    id: "1",
    name: "Client 1",
    email: "client-1@gmail.com",
  },
  {
    id: "2",
    name: "Client 2",
    email: "client-2@gmail.com",
  },
  {
    id: "3",
    name: "Client 3",
    email: "client-3@gmail.com",
  },
  {
    id: "4",
    name: "Client 4",
    email: "client-4@gmail.com",
  },
  {
    id: "5",
    name: "Client 5",
    email: "client-5@gmail.com",
  },
  {
    id: "6",
    name: "Client 6",
    email: "client-6@gmail.com",
  },
];

const userList = [
  {
    id: "1",
    name: "User 1",
    email: "user-1@gmail.com",
    role: "USER",
    phone: "+8801611759901",
    listFriends: [
      {
        id: "2",
        name: "User 2",
        email: "user-2@gmail.com",
        role: "ADMIN",
        phone: "+8801611759903",
      },
    ],
  },
  {
    id: "2",
    name: "User 2",
    email: "user-2@gmail.com",
    role: "ADMIN",
    phone: "+8801611759902",
    listFriends: [
      {
        id: "3",
        name: "User 3",
        email: "user-3@gmail.com",
        role: "ADMIN",
        phone: "+8801611759903",
      },
    ],
  },
  {
    id: "3",
    name: "User 3",
    email: "user-3@gmail.com",
    role: "ADMIN",
    phone: "+8801611759903",
    listFriends: [
      {
        id: "1",
        name: "User 1",
        email: "user-1@gmail.com",
        role: "USER",
        phone: "+8801611759903",
      },
    ],
  },
  {
    id: "4",
    name: "User 4",
    email: "user-4@gmail.com",
    role: "EDITOR",
    phone: "+8801611759904",
    listFriends: [
      {
        id: "5",
        name: "User 5",
        email: "user-5@gmail.com",
        role: "MODERATOR",
        phone: "+8801611759903",
      },
    ],
  },
  {
    id: "5",
    name: "User 5",
    email: "user-5@gmail.com",
    role: "MODERATOR",
    phone: "+8801611759905",
    listFriends: [
      {
        id: "4",
        name: "User 4",
        email: "user-4@gmail.com",
        role: "EDITOR",
        phone: "+8801611759903",
      },
    ],
  },
  {
    id: "6",
    name: "User 6",
    email: "user-6@gmail.com",
    role: "USER",
    phone: "+8801611759902",
    listFriends: [
      {
        id: "3",
        name: "User 3",
        email: "user-3@gmail.com",
        role: "ADMIN",
        phone: "+8801611759903",
      },
    ],
  },
];

const movieList = [
  {
    id: "1",
    name: "Movie 1",
    year: 2019,
    isInTheaters: true,
  },
  {
    id: "2",
    name: "Movie 2",
    year: 2018,
    isInTheaters: false,
  },
  {
    id: "3",
    name: "Movie 3",
    year: 1995,
    isInTheaters: false,
  },
  {
    id: "4",
    name: "Movie 4",
    year: 1996,
    isInTheaters: true,
  },
  {
    id: "5",
    name: "Movie 5",
    year: 1999,
    isInTheaters: true,
  },
];

module.exports = { projects, clients, userList, movieList };
