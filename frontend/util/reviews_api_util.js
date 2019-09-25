export const fetchReview = (businessId) => {
    $.ajax({
        url: `/api/businesses/${businessId}/reviews`,
        method: 'GET'
    })
}

export const createReview = (review) => {
    $.ajax({
        url: `/api/businesses/${review.businessId}/reviews`,
        method: 'POST',
        data: { review }
    })
}

export const updateReview = (review) => {
    $.ajax({
        url: `/api/businesses/${review.businessId}/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
}

export const deleteReview = (review) => {
    $.ajax({
        url: `/api/businesses/${review.businessId}/reviews/${review.id}`,
        method: 'DELETE'
    })
}