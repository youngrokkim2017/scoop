class Business < ApplicationRecord
    validates :name, :address, :phone_number, presence: true, uniqueness: true
    validates :city, :state, :zip_code, :website, :description, :price_range, :credit_card, :parking, :wifi, :restroom, :category, :open_time, :close_time, :rating, :lat, :lng, presence: true

    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

    has_one_attached :photo

    # has_many_attached :food_photos
    
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("lng > ?", bounds[:southWest][:lng])
    end
end
