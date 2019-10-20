# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ModelName.connection.execute('ALTER SEQUENCE model_name_id_seq RESTART WITH 1')

require 'open-uri'

Review.destroy_all
Business.destroy_all
User.destroy_all

Review.connection.execute('ALTER SEQUENCE reviews_id_seq RESTART WITH 1')
Business.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
User.connection.execute('ALTER SEQUENCE businesses_id_seq RESTART WITH 1')

#users
demo = User.create!(first_name: 'patrick', last_name: 'kim', 
    email: 'patrick@email.com', password: '123456')
user_1 = User.create!(first_name: 'Mickey', last_name: 'Mouse', 
    email: 'mickey@email.com', password: 'disney')
user_2 = User.create!(first_name: 'Donald', last_name: 'Duck', 
    email: 'donald@email.com', password: 'disney')
user_3 = User.create!(first_name: 'Bugs', last_name: 'Bunny',
    email: 'bugs@email.com', password: 'looney')
user_4 = User.create!(first_name: 'Daffy', last_name: 'Duck',
    email: 'daffy@email.com', password: 'looney')
user_5 = User.create!(first_name: 'Rick', last_name: 'Sanchez',
    email: 'rick@email.com', password: 'wubbalubba')
user_6 = User.create!(first_name: 'Morty', last_name: 'Smith',
    email: 'morty@email.com', password: 'dubdub')
# user_7 = User.create!(first_name: , last_name: ,
#     email: , password:)
# user_8 = User.create!(first_name: , last_name: ,
#     email: , password:)

#businesses
business_1 = Business.create!(name: 'Salt and Straw', address: '2201 Fillmore Street', 
    city: 'San Francisco', state: 'CA', zip_code: 94115, website: 'saltandstraw.com', 
    description: 'Small-batch, chef-driven ice cream made by hand with local ingredients since 2011', 
    phone_number: '(415) 829-2803', price_range: '$', credit_card: 'Yes', 
    parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '11:00AM', close_time: '11:00PM', rating: '5', lat: 37.789958, lng: -122.434247)
business_2 = Business.create!(name: 'Fentons', address: '4226 Piedmont Ave', 
    city: 'Oakland', state: 'CA', zip_code: 94611, website: 'fentonscreamery.com', 
    description: 'Ice cream parlor known for sundaes and variety of flavors, featured in UP', 
    phone_number: '(510) 658-7000', price_range: '$$', credit_card: 'Yes', 
    parking: 'Yes', wifi: 'No', restroom: 'Yes', category: 'ice cream', 
    open_time: '11:00AM', close_time: '11:00PM', rating: '5', lat: 37.828002, lng: -122.250132)
business_3 = Business.create!(name: 'Bi-Rite Creamery', address: '3692 18th St', 
    city: 'San Francisco', state: 'CA', zip_code: 94110, website: 'biritemarket.com/creamery', 
    description: 'Homemade organic ice cream in flavors, no visit to SF is complete without a visit to Bi-Rite next to Dolores Park', 
    phone_number: '(415) 626-5600', price_range: '$', credit_card: 'Yes', 
    parking: 'Street', wifi: 'No', restroom: 'Yes', category: 'ice cream', 
    open_time: '11:00AM', close_time: '10:00PM', rating: '5', lat: 37.761573, lng: -122.425770)
business_4 = Business.create!(name: 'Yogurt Park', address: '2433 Durant Ave', 
    city: 'Berkeley', state: 'CA', zip_code: 94704, website: 'http://www.yogurtpark.com/', 
    description: 'Long-running (since 1977) shop, open late, offering frozen yogurt in simple digs.', 
    phone_number: '(510) 549-0570', price_range: '$', credit_card: 'Yes', 
    parking: 'Street Parking', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '11:00AM', close_time: '12:00AM', rating: '5', lat: 37.867851, lng: -122.259785)
business_5 = Business.create!(name: 'iScream', address: '1819 Solano Ave', 
    city: 'Berkeley', state: 'CA', zip_code: 94707, website: 'http://www.iscreamberkeley.com/', 
    description: 'Quirky little ice cream shop featuring classic & creative flavors along with a vintage interior.', 
    phone_number: '(510) 225-4607', price_range: '$', credit_card: 'Yes', 
    parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '1:00PM', close_time: '9:00PM', rating: '5', lat: 37.891560, lng: -122.279404)
business_6 = Business.create!(name: 'Mr. Dewie''s Cashew Creamery', address: '1116 Solano Ave', 
    city: 'Albany', state: 'CA', zip_code: 94706, website: 'www.mrdewies.com', 
    description: 'Bright, charming cafe for vegan, non-dairy cashew milk ice cream made with organic ingredients.', 
    phone_number: '(510) 225-9534', price_range: '$', credit_card: 'Yes', 
    parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '12:00PM', close_time: '9:00PM', rating: '5', lat: 37.890199, lng: -122.298061)
business_7 = Business.create!(name: 'Mitchell''s Ice Cream', address: '688 San Jose Avenue', 
    city: 'San Francisco', state: 'CA', zip_code: 94110, website: 'mitchellsicecream.com', 
    description: 'Family-owned ice cream shop scoops classic & creative flavors made in small batches on the premises.', 
    phone_number: '(415) 648-2300', price_range: '$', credit_card: 'Yes', 
    parking: 'Yes', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '11:00AM', close_time: '11:00PM', rating: '5', lat: 37.744231, lng: -122.422793)
business_8 = Business.create!(name: 'Garden Creamery', address: '3566 20th St', 
    city: 'San Francisco', state: 'CA', zip_code: 94110, website: 'gardencreamery.com', 
    description: 'A petite, pastel-toned scoop shop serving largely organic ice creams, sorbets & pops.', 
    phone_number: '(808) 224-6626', price_range: '$', credit_card: 'Yes', 
    parking: 'Yes', wifi: 'Yes', restroom: 'No', category: 'ice cream', 
    open_time: '2:00PM', close_time: '10:00PM', rating: '5', lat: 37.758643, lng: -122.420481)
business_9 = Business.create!(name: 'Ghirardelli Ice Cream', address: '900 North Point St Suite 52', 
    city: 'San Francisco', state: 'CA', zip_code: 94109, website: 'www.ghirardelli.com', 
    description: 'Shops and restaurants fill this 3-level landmark former chocolate factory near Fisherman''s Wharf.', 
    phone_number: '(415) 474-3938', price_range: '$$', credit_card: 'Yes', 
    parking: 'Yes', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '9:00AM', close_time: '11:00PM', rating: '4', lat: 37.805862, lng: -122.422641)
business_10 = Business.create!(name: 'Almare Gelato Italiano', address: '2170 Shattuck Ave', 
    city: 'Berkeley', state: 'CA', zip_code: 94704, website: 'www.almaregelato.com', 
    description: 'Lively treat spot serving updated old-world Italian gelato & sorbet flavors with vegan options.', 
    phone_number: '(510) 649-1888', price_range: '$', credit_card: 'Yes', 
    parking: 'Yes', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '11:30AM', close_time: '11:00PM', rating: '5', lat: 37.869784, lng: -122.268282)
business_11 = Business.create!(name: 'Secret Scoop Thai Gelato', address: '1922 Martin Luther King Jr Way', 
    city: 'Berkeley', state: 'CA', zip_code: 94704, website: 'secretscoopgelato.com', 
    description: 'Scoop shop serving creative gelatos & sorbets with Thai flavors in a petite, stylish space.', 
    phone_number: '(415) 939-2832', price_range: '$', credit_card: 'Yes', 
    parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '3:00PM', close_time: '9:00PM', rating: '5', lat: 37.872729, lng: -122.273414)
business_12 = Business.create!(name: 'Caravaggio Gelateria Italiana', address: '1797 Shattuck Ave', 
    city: 'Berkeley', state: 'CA', zip_code: 94709, website: 'n/a', 
    description: 'Airy, casual scoop shop serving creative & traditional gelatos plus coffee drinks & patio seating.', 
    phone_number: '(510) 900-2401', price_range: '$', credit_card: 'Yes', 
    parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '1:00PM', close_time: '10:00PM', rating: '5', lat: 37.875105, lng: -122.268575)
business_13 = Business.create!(name: 'Lush Gelato', address: '520 Columbus Ave', 
    city: 'San Francisco', state: 'CA', zip_code: 94133, website: 'www.lushgelato.com', 
    description: 'Simple counter serving carefully sourced gelato & sorbetto in a range of creative flavors.', 
    phone_number: '(415) 590-7081', price_range: '$', credit_card: 'Yes', 
    parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '2:00PM', close_time: '10:00PM', rating: '5', lat: 37.799860, lng: -122.409261)
business_14 = Business.create!(name: 'Cookiebar Creamery', address: '517 8th St', 
    city: 'Oakland', state: 'CA', zip_code: 94607, website: 'cookiebarcreamery.com', 
    description: 'Ice cream parlor & cookie bakery dishing up many flavors in a spare, modern space.', 
    phone_number: '(510) 250-9240', price_range: '$', credit_card: 'Yes', 
    parking: 'Yes', wifi: 'No', restroom: 'No', category: 'ice cream', 
    open_time: '11:00AM', close_time: '9:00PM', rating: '5', lat: 37.800672, lng: -122.275609)
business_15 = Business.create!(name: 'Mr. and Mrs. Miscellaneous', address: '699 22nd St', 
    city: 'San Francisco', state: 'CA', zip_code: 94107, website: 'n/a', 
    description: 'Modern & airy sweet shop specializing in creative ice cream flavors, cookies & other confections.', 
    phone_number: '(415) 970-0750', price_range: '$', credit_card: 'Yes', 
    parking: 'Yes', wifi: 'No', restroom: 'Yes', category: 'ice cream', 
    open_time: '11:30AM', close_time: '6:00PM', rating: '5', lat: 37.757835, lng: -122.388144)
# business_16 = Business.create!(name: '', address: '', 
#     city: '', state: 'CA', zip_code: , website: '', 
#     description: '', phone_number: '', price_range: '$', 
#     credit_card: 'Yes', parking: 'No', wifi: 'No', restroom: 'No', category: 'ice cream', 
#     open_time: '', close_time: '', rating: '5', lat: , lng: )

# #reviews
review_1 = Review.create!(user_id: user_1.id, business_id: business_1.id, 
    body: "Interesting flavors with local ingredients! I tried the ice cream flight to taste multiple flavors", 
    rating: 5)
review_2 = Review.create!(user_id: user_3.id, business_id: business_1.id,
    body: "Their coffee ice cream was delicious! But the line was too long",
    rating: 4)
review_3 = Review.create!(user_id: user_5.id, business_id: business_1.id,
    body: "Ice cream was good but the wait was long and there are barely any seatings",
    rating: 3)

###

review_4 = Review.create!(user_id: user_2.id, business_id: business_2.id,
    body: "Wide variety of flavors but a little pricy and the wait time was long",
    rating: 4)
review_5 = Review.create!(user_id: user_4.id, business_id: business_2.id,
    body: "Great experience! I tried the black and tan and it the perfect combination
    of carmel, chocolate, and ice cream",
    rating: 5)
review_6 = Review.create!(user_id: user_6.id, business_id: business_2.id,
    body: "Lots of tasty classic flavors but they wouldn\'t let me attempt the
    ice cream challenge without a voucher. I also tried their food and it was 
    just average diner food",
    rating: 3)

###

review_7 = Review.create!(user_id: user_3.id, business_id: business_3.id,
    body: "The ice cream was good but the long line of people was not worth the
    hype",
    rating: 4)
review_8 = Review.create!(user_id: user_5.id, business_id: business_3.id,
    body: "I love their variety of flavors and also the option to get their soft
    serve right next door",
    rating: 5)
review_9 = Review.create!(user_id: user_1.id, business_id: business_3.id,
    body: "My go to place to get ice cream in SF!",
    rating: 5)

###

# review_10 = Review.create!(user_id: user_4.id, business_id: ,
#     body: ,
#     rating: )
# review_11 = Review.create!(user_id: user_6.id, business_id: ,
#     body: ,
#     rating: )
# review_12 = Review.create!(user_id: user_2.id, business_id: ,
#     body: ,
#     rating: )