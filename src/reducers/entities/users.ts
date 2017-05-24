const USER_ADD = 'USER_ADD';

export const usersAdd = (data) => ({
  type: USER_ADD,
  data: data
});

const initialUsers = {
  '1': {id: 1, name: "Vladimir", lastName: "Gasanov"},
  '2': {id: 2, name: "Sergei", lastName: "Ivanov"},
}

const users = (state = initialUsers, action) =>{

  switch (action.type) {
    case USER_ADD:
      return { ...state, [action.data.id]: {...action.data} };
    default:
      return initialUsers
  }

};

export default users;
