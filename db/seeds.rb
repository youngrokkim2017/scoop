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
user_1 = User.create!()
user_2 = User.create!()

#businesses
business_1 = Business.create!()
business_2 = Business.create!()

# #reviews
# review_1 = Review.create!()
# review_2 = Review.create!()