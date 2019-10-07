export const searchBusinesses = (input) => {
    return $.ajax({
        method: "GET",
        url: `/api/search/${search}`
    })
}