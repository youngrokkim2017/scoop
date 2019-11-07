class Review < ApplicationRecord
    validates :user_id, :business_id, :body, :rating, presence: true
    # validates :rating, { in: (1..5) }
    # validates :rating, { in: [1, 2, 3, 4, 5] }

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

    has_one_attached :photo
end
