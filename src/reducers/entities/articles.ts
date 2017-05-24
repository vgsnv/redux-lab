const ARTICLES_ADD = 'ARTICLES_ADD';

export const articlesAdd = (data) => ({
  type: ARTICLES_ADD,
  data: data
});

const articles = (state, action) =>{

  switch (action.type) {
    case ARTICLES_ADD:
      return action.data;
    default:
      return 'Hello worlds';
  }

};

export default articles;
