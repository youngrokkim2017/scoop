export const fetchReviews = (businessId) => {
    return $.ajax({
        url: `/api/businesses/${businessId}/reviews`,
        method: 'GET'
        // data: { businessId }
    })
}

export const createReview = (review) => {
    return $.ajax({
        url: `/api/businesses/${review.businessId}/reviews`,
        method: 'POST',
        data: { review }
    })
}

export const editReview = (review) => {
    return $.ajax({
        url: `/api/businesses/${review.businessId}/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
}

export const deleteReview = (review) => {
    return $.ajax({
        url: `/api/businesses/${review.businessId}/reviews/${review.id}`,
        method: 'DELETE'
    })
}