class Business < ApplicationRecord
    validates :description, :lat, :lng, presence: true
    
    validates :
    validates :

    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review
    
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("lng > ?", bounds[:southWest][:lng])
    end
end
