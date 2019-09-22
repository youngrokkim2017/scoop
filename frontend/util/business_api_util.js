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

export const createBusiness = (businessForm) => (
    $.ajax({
        method: 'POST',
        url: '/api/businesses',
        data: businessForm
    })
)