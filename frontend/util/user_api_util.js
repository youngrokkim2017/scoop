export const fetchUser = (id) => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `/api/users/${id}`,
        // data: (id),
        // error: (err) => console.log(err)
    })
}