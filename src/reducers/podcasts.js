export default function podcasts(
  state = { 
    searchResults: [], 
    show: {
      info: {},
      episodes: []
    },
    noResults: false,
  },
  action
) {
  switch (action.type) {
    case "ADD_PODCASTS":
      return {...state, searchResults: action.podcasts}
    case "NO_RESULTS": 
      return {...state, searchResults: [], noResults: true}
    case "ADD_PODCAST_INFO":
      return {...state, show: {...state.show, info: action.info}}
    case "ADD_PODCAST_EPISODES":
      return {...state, show: {...state.show, episodes: action.episodes}}
    default:
      return state;
  }
}

