export const searchBusinesses = (search) => {
    return $.ajax({
        method: "GET",
        url: `/api/search/${search}`,
        data: { search }
    })
}