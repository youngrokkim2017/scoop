class Business < ApplicationRecord
    validates :name, :address, :phone_number, presence: true, uniqueness: true
    validates :city, :state, :zip_code, :website, :description, :price_range, :credit_card, :parking, :wifi, :restroom, :category, :open_time, :close_time, :rating, :lat, :lng, presence: true

    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review
    
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("lng > ?", bounds[:southWest][:lng])
    end

#       def self.in_bounds(bounds) 
#     return if bounds == nil
#     north_bound = bounds["northEast"]["lat"].to_f

#     south_bound = bounds["southWest"]["lat"].to_f
#     east_bound = bounds["northEast"]["lng"].to_f
#     west_bound = bounds["southWest"]["lng"].to_f
    
#     Businesse.where('longitude <= ? and longitude >= ?', east_bound, west_bound).where('latitude <= ? and latitude >= ?', north_bound, south_bound) 
#   end

#   def self.in_location(location)
#     Businesse.where('lower(city) LIKE ? or lower(address) LIKE ? ', "%#{location.downcase}%", "%#{location.downcase}%" )
#   end

#   def self.find_business(query)
#     Businesse.where('lower(sub_category) LIKE ? or lower(category) LIKE ? or lower(name) LIKE ? ', "%#{query[0..3].downcase}%", "%#{query[0..3].downcase}%", "%#{query[0..3].downcase}%")
#   end
end
