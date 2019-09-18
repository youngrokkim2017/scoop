export const fetchBusinesses = (filters) => {
    return $.ajax({
        method: "GET",
        url: "/api/businesses",
        data: { filters }
        // error: (err) => console.log(err)
    })
}

export const fetchBusiness = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/businesses/${id}`,
        // error: (err) => console.log(err)
    })
}