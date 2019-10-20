json.businesses do
    json.set! @business.id do 
        json.partial! 'api/businesses/business', business: @business
        json.reviews @business.reviews
        # json.foodPhotoUrls @business.food_photos.map { |file| url_for(file) }
    end 
end

json.reviews do
    @business.reviews.map do |review|
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end
    end 
end


#     ratings = @business.reviews.map{ |review| review.rating }
    # json.set! @business.id do

    #     json.id @business.id
    #     json.name @business.name
    #     json.address @business.address
    #     json.city @business.city
    #     json.state @business.state
    #     json.zipCode @business.zip_code
    #     json.website @business.website
    #     json.description @business.description
    #     json.phoneNumber @business.phone_number
    #     json.priceRange @business.price_range
    #     json.creditCard @business.credit_card
    #     json.parking @business.parking
    #     json.wifi @business.wifi
    #     json.restroom @business.restroom
    #     json.category @business.category
    #     json.openTime @business.open_time
    #     json.closeTime @business.close_time
    #     json.rating @business.rating
    #     json.lat @business.lat
    #     json.lng @business.lng
    #     json.averageBusinessRating ratings.sum / (ratings.length * 1.0)
    # end
