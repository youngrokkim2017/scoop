export const searchBusinesses = (search) => {
    return $.ajax({
        method: "GET",
        url: `/api/search/${search}`,
        data: { search },
        success: function(response) { console.log(response) }
    })
}