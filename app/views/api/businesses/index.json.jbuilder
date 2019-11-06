@businesses.map do |business|
    json.businesses do
        json.set! business.id do
            json.partial! 'api/businesses/business', business: business
            json.reviews business.reviews
            json.photoUrl business.photo.attached? ? url_for(business.photo) : ''
        end
    end
end

# @businesses.map do |business|
#     json.businesses do
#         json.set! business.id do
#             json.photoUrl url_for(business.photo)
#         end
#     end
# end


# @businesses.each do |business|
#     json.set! business.id do
#         ratings = business.reviews.map{ |review| review.rating }

#         json.id business.id
#         json.name business.name
#         json.address business.address
#         json.city business.city
#         json.state business.state
#         json.zipCode business.zip_code
#         json.website business.website
#         json.description business.description
#         json.phoneNumber business.phone_number
#         json.priceRange business.price_range
#         json.creditCard business.credit_card
#         json.parking business.parking
#         json.wifi business.wifi
#         json.restroom business.restroom
#         json.category business.category
#         json.openTime business.open_time
#         json.closeTime business.close_time
#         json.rating business.rating
#         json.lat business.lat
#         json.lng business.lng
#         json.averageBusinessRating ratings.sum / (ratings.length * 1.0)
#     end
# end