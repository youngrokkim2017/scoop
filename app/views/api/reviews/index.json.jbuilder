# @reviews.each do |review|
#     json.set! review.id do
#         json.partial! 'api/reviews/review', review: review
#     end
# end

@reviews.each do |review|
    json.set! review.id do 
        json.id review.id
        json.authorId review.user_id
        json.businessId review.business_id
        json.body review.body
        json.rating review.rating
        json.authorFirstName review.user.first_name.capitalize
        json.authorLastName review.user.last_name[0].capitalize
        json.createdAt review.created_at
        # json.photoUrl url_for(review.user.photo) if user.photo.attached?
        json.photoUrl review.photo.attached? ? url_for(review.photo) : ''
        json.authorPhotoUrl review.user.photo.attached? ? url_for(review.user.photo) : ''
    end
end