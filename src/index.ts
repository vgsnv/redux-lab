import { createStore } from 'redux';

import { articlesAdd } from './reducers/entities/articles';
import { usersAdd } from './reducers/entities/users';

import app from './reducers';

let store = createStore(app);

store.dispatch(articlesAdd('Hello you'));
store.dispatch(articlesAdd('Byyyy you'));
store.dispatch(usersAdd({id: 3, name: "Bill", lastName: "Gates"}));
store.dispatch(usersAdd({id: 4, name: "Lena", lastName: "Niss"}));

store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(usersAdd({id: 10001, name: "Lena", lastName: "Niss"}));
