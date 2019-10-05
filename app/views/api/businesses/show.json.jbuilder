json.businesses do
    json.set! @business.id do 
        json.partial! 'api/businesses/business', business: @business
    end 
end

json.reviews do
    @business.reviews.map do |review|
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end
    end 
end