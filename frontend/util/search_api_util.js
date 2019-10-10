export const getSearchedBusinesses = (input) => {
    console.log();
    return $.ajax({
        method: "GET",
        // url: `/api/search/${search}`,
        url: '/api/search',
        data: { input },
    })
}