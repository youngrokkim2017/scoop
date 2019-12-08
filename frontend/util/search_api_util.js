export const getSearchedBusinesses = (input) => {
    // console.log();
    return $.ajax({
        method: "GET",
        // url: `/api/search/${search}`,
        url: '/api/search',
        data: { input },
    })
}

// // export const search = (query) => {
// export const getSearchedBusinesses = (query) => {
//     return $.ajax({
//         url: `/api/businesses/search/${query}`,
//         method: 'GET',
//         data: { query }
//     })
// }