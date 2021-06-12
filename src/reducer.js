export const initialState={
    user:null,
    PlayList: [],
    playing: false,
    item: null,
    //remove after finished developing...
    // token: "BQBMN_IZIn4S_7Uj32iWTyetUYTZQyUiPLf_c7V53JA2ukPtLtazwUJ7rDQ0-XzhnxSovml5wuAbkQtZnALxAE9C81_IIlP6qKlDJL5Y8CWSGDxz0SdMhlSpWCYnbiPpNs1y9imICHE56kqQjxwASHasmDfhC_ztr4ad7oxzaxGRJNSj0-jW",
};

const reducer=(state,action)=>{
    console.log(action);
    //Action ->type,[payload]
    switch(action.type){
        case 'SET_USER':
          return{
            ...state,
            user:action.user,
          };
        case 'SET_TOKEN':
          return{
            ...state,
            token: action.token,
          }
        case "SET_PLAYLISTS":
          return{
            ...state,
            playlists:action.playlists,
          }
        case "SET_DISCOVER_weekly":
          return{
            ...state,
            discover_weekly: action.discover_weekly,
          }
        default:
            return state;
    }
};
export default reducer;