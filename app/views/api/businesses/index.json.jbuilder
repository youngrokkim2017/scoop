@businesses.map do |business|
    json.businesses do
        json.set! business.id do
            json.partial! 'api/businesses/business', business: business
            json.reviews business.reviews
        end
    end
end