import * as actionTypes from "./actionTypes"

const initialState = {
  articles: [
    { id: 1, title: "Post 1", body: "Hey there this is the post example number 1!" },
    { id: 2, title: "Post 2", body: "Maecenas ipsum lacus, lacinia quis posuer" },
  ],
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(), // not really unique but works as example
        title: action.article.title,
        body: action.article.body,
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }
      default: //do nothing
  }
  return state
}
export default reducers