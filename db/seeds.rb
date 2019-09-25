# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Review.destroy_all
Business.destroy_all
User.destroy_all

#users
user_1 = User.create!(first_name: 'Mickey', last_name: 'Mouse', email: 'mickey@email.com')
# user_2 = User.create!()

#businesses
business_1 = Business.create!(name: 'Salt and Straw', address: '2201 Fillmore Street', city: 'San Francisco', state: 'CA', zip_code: 94115, website: 'saltandstraw.com', description: 'Classic SF Flavors', phone_number: '415-829-2803', price_range: '$', credit_card: 'Yes', parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', rating: '5', open_time: '11:00 AM', close_time: '11:00PM')
# business_2 = Business.create!()

# #reviews
# review_1 = Review.create!()
# review_2 = Review.create!()