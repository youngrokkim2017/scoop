/*
signup: should make an AJAX request that creates a new user.
login: should make an AJAX request that creates a new session.
logout: should make an AJAX request that deletes the current session.
*/

export const signup = user => {
    $.ajax({
        method: 'POST',
        url: 'api/user',
        data: { user }
    })
}

export const login = user => {
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: { user }
    })
}

export const logout = () => {
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
}