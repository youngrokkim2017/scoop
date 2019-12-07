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
    description: 'Ice cream parlor known for sundaes and variety of flavors, featured in Disney''s UP', 
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
# business_1 = salt and straw
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
#business_2 = fentons

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
#business_3 = birite

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
#business_4 = yogurt park

review_10 = Review.create!(user_id: user_4.id, business_id: business_4.id,
    body: "There are always a wide selection of flavors, from classic chocolate 
    and vanilla to seasonal flavors",
    rating: 5)
review_11 = Review.create!(user_id: user_6.id, business_id: business_4.id,
    body: "Great hours for a late night snack, and very generous with toppings, 
    they add toppings in the middle and on the top of the cup",
    rating: 5)
review_12 = Review.create!(user_id: user_2.id, business_id: business_4.id,
    body: "Tasty flavors and plenty of toppings! But the size of their servings
    are a bit too large to finish sometimes and seems like a waste",
    rating: 4)

###
#business_5 = iscream

review_13 = Review.create!(user_id: user_5.id, business_id: business_5.id,
    body: "Variety of unique flavors, last time I visited I got had to get a 
    second serving. They also give you a little biscuit with the ice cream",
    rating: 5)
review_14 = Review.create!(user_id: user_1.id, business_id: business_5.id,
    body: "The ice cream was good but it was very difficult to find parking 
    and there were not seats inside",
    rating: 4)
review_15 = Review.create!(user_id: user_3.id, business_id: business_5.id,
    body: "I scream, you scream, we all scream for ice cream!",
    rating: 5)

###
#business_6 = mr. dewies

review_16 = Review.create!(user_id: user_6.id, business_id: business_6.id,
    body: "Visited this parlor after going bowling and it was a nice business to 
    go with friends",
    rating: 5)
review_17 = Review.create!(user_id: user_2.id, business_id: business_6.id,
    body: "First time trying a cashew based ice cream creamery and it was delicious!",
    rating: 5)
review_18 = Review.create!(user_id: user_4.id, business_id: business_6.id,
    body: "The ice cream was good and the store was neat, had a bench along the 
    wall to sit and water for customers",
    rating: 5)

###
#business_7 = mitchells

review_19 = Review.create!(user_id: user_1.id, business_id: business_7.id,
    body: "They have a wide variety of not just flavors, but options for sundaes, 
    floats, milkshakes, etc.",
    rating: 5)
review_20 = Review.create!(user_id: user_2.id, business_id: business_7.id,
    body: "The wait was not worth it. There were no seatings outside to wait, 
    and it was crowded inside as well. But the customer service was still good",
    rating: 3)
review_21 = Review.create!(user_id: user_3.id, business_id: business_7.id,
    body: "They had different flavors of ice cream and pints available, but there 
    was too much selection that it was hard to come to a decision",
    rating: 4)

###
#business_8 = garden creamery

review_22 = Review.create!(user_id: user_4.id, business_id: business_8.id,
    body: "Aestheticall pleasing store and ice cream! It is a must try",
    rating: 5)
review_23 = Review.create!(user_id: user_5.id, business_id: business_8.id,
    body: "The ice cream was very smooth and tasty",
    rating: 5)
review_24 = Review.create!(user_id: user_6.id, business_id: business_8.id,
    body: "Different than other ice cream shops! They have unique Asian dessert 
    flavors like ube, black sesame, and mango sticky rice.",
    rating: 5)


###
#business_9 = ghirardelli

review_25 = Review.create!(user_id: user_2.id, business_id: business_9.id,
    body: "The vibes are unbeatable with it being right near the pier. Can take 
    a break and have a seat and order a sundae",
    rating: 5)
review_26 = Review.create!(user_id: user_3.id, business_id: business_9.id,
    body: "Their service was excellent with providing good recommendations and 
    free samples of their chocolates and ice cream flavors",
    rating: 5)
review_27 = Review.create!(user_id: user_4.id, business_id: business_9.id,
    body: "It's Ghirardelli ice cream, can't go wrong with the quality and taste",
    rating: 5)

###
#business_10 = almare

review_28 = Review.create!(user_id: user_5.id, business_id: business_10.id,
    body: "Their gelato tastes amazing! Only downside to their store is a minimum 
    amount needed to use credit cards",
    rating: 4)
review_29 = Review.create!(user_id: user_6.id, business_id: business_10.id,
    body: "Their toasted almond with caramalized fig can't be beat!",
    rating: 5)
review_30 = Review.create!(user_id: user_1.id, business_id: business_10.id,
    body: "The options here are hard to choose because they were all good, and 
    they also give the option to get half a scoop of each flavor",
    rating: 5)

###
#business_11 = secret scoop

review_31 = Review.create!(user_id: user_3.id, business_id: business_11.id,
    body: "Their desserts tasted great! But their odd hours and lack of seating 
    and parking are inconvenient",
    rating: 3)
review_32 = Review.create!(user_id: user_4.id, business_id: business_11.id,
    body: "I like the different theme of the gelato because the flavors are thai 
    dessert based",
    rating: 5)
review_33 = Review.create!(user_id: user_5.id, business_id: business_11.id,
    body: "They have choices besides just a scoop on a cone or cup and there 
    isn't a flavor you can go wrong with",
    rating: 5)

###
#business_12 = caravaggio

review_34 = Review.create!(user_id: user_6.id, business_id: business_12.id,
    body: "Lovely environment with lots of indoor seating to enjoy your dessert",
    rating: 5)
review_35 = Review.create!(user_id: user_1.id, business_id: business_12.id,
    body: "Their variety of gelato is unqiue and they have an option to eat the 
    ice cream there where they serve in a re-useable cup",
    rating: 5)
review_36 = Review.create!(user_id: user_2.id, business_id: business_12.id,
    body: "Love the ice cream and service! Available street parking is difficult 
    to find",
    rating: 4)

###
#business_13 = lush

review_37 = Review.create!(user_id: user_6.id, business_id: business_13.id,
    body: "They have a good variety of flavors and they have seating in the back 
    of the plaza to sit and relax",
    rating: 5)
review_38 = Review.create!(user_id: user_5.id, business_id: business_13.id,
    body: "Unique flavors I haven't seen elsewhere like bourbon butterfinger, 
    strawberry sorbetto, and cowgirl fromage blanc",
    rating: 5)
review_39 = Review.create!(user_id: user_4.id, business_id: business_13.id,
    body: "The gelato tastes good but parking is hard to find and if the plaza 
    is closed so if the gelato shop",
    rating: 4)

###
#business_14 = cookiebar

review_40 = Review.create!(user_id: user_3.id, business_id: business_14.id,
    body: "One of my go to choices for ice cream in Oakland! Highly recommend",
    rating: 5)
review_41 = Review.create!(user_id: user_2.id, business_id: business_14.id,
    body: "They serve a variety of fun flavors like fruity pebbles, banana oreo, 
    and ube blueberry pancake",
    rating: 5)
review_42 = Review.create!(user_id: user_1.id, business_id: business_14.id,
    body: "The ice cream shop gives a very modern vibe with plenty of seating 
    inside to enjoy a scoop of ice cream or a ice cream cookie sandwich",
    rating: 5)

###
#business_15 = mr and mrs misc

review_43 = Review.create!(user_id: user_demo.id, business_id: business_15.id,
    body: "I have heard Mr. and Mrs. Miscellaneous is a strong competitor with 
    Bi-Rite creamery as the iconic SF ice cream and I would agree they are both 
    must tries",
    rating: 5)
review_44 = Review.create!(user_id: user_3.id, business_id: business_15.id,
    body: "I enjoyed the available flavors like frosted flakes, white rabbit 
    candy, pink squirrel, and pineapple rum",
    rating: 5)
review_45 = Review.create!(user_id: user_6.id, business_id: business_15.id,
    body: "I enjoyed the ice cream and their interesting flavors, but the seating 
    was limited and indoor spacing was a bit awkward",
    rating: 4)


# # Photos
# post = Post.first
# file = File.open('app/assets/images/sennacy.jpg')
# post.photo.attach(io: file, filename: 'sennacy.jpg')
# post.photo.attached? # => true

demo.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/patrick.png'), filename: 'patrick.png');
user_1.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mickey.jpeg'), filename: 'mickey.jpeg');
user_2.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/donald.jpg'), filename: 'donald.jpg');
user_3.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/bugs.png'), filename: 'bugs.png');
user_4.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/daffy.png'), filename: 'daffy.png');
user_5.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/rick.jpeg'), filename: 'rick.jpeg');
user_6.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/morty.jpg'), filename: 'morty.jpg');

# business_1.photo.attach(io: File.open('s3://app-scoop-seed/saltandstraw.png'), filename: 'saltandstraw.png');
business_1.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/saltandstraw.png'), filename: 'saltandstraw.png');
business_2.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/fentons_2.jpg'), filename: 'fentons_2.jpg');
business_3.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/birite.jpeg'), filename: 'birite.jpeg');
business_4.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/yogurt_park.jpg'), filename: 'yogurt_park.jpg');
business_5.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/iscream.png'), filename: 'iscream.png');
business_6.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_dewies.jpeg'), filename: 'mr_dewies.jpeg');
business_7.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mitchells.jpg'), filename: 'mitchells.jpg');
business_8.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/garden_creamery.jpeg'), filename: 'garden_creamery.jpeg');
business_9.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/ghirardelli.jpg'), filename: 'ghirardelli.jpg');
business_10.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/almare.jpeg'), filename: 'almare.jpeg');
business_11.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/secret_scoop.jpg'), filename: 'secret_scoop.jpg');
business_12.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/caravaggio.jpg'), filename: 'caravaggio.jpg');
business_13.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/lush_gelato.jpg'), filename: 'lush_gelato.jpg');
business_14.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/cookiebar.png'), filename: 'cookiebar.png');
business_15.photo.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_mrs_misc.jpg'), filename: 'mr_mrs_misc.jpg');


# BUSINESS FOOD PHOTOS
business_1.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/saltandstraw_food/saltstraw_1.jpg'), filename: 'saltandstraw_food/saltstraw_1.jpg');
business_1.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/saltandstraw_food/saltstraw_2.jpg'), filename: 'saltandstraw_food/saltstraw_2.jpg');
business_1.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/saltandstraw_food/saltstraw_3.jpg'), filename: 'saltandstraw_food/saltstraw_3.jpg');
business_1.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/saltandstraw_food/saltstraw_4.jpg'), filename: 'saltandstraw_food/saltstraw_4.jpg');

business_2.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/fentons_food/fentons_image_1.jpg'), filename: 'fentons_food/fentons_image_1.jpg');
business_2.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/fentons_food/fentons_food_2.png'), filename: 'fentons_food/fentons_food_2.png');
business_2.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/fentons_food/fentons_image_3.jpg'), filename: 'fentons_food/fentons_image_3.jpg');
business_2.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/fentons_food/fentons_food_4.jpg'), filename: 'fentons_food/fentons_food_4.jpg');

business_3.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/birite_food/birite_food_1.jpg'), filename: 'birite_food/birite_food_1.jpg');
business_3.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/birite_food/birite_food_2.jpg'), filename: 'birite_food/birite_food_2.jpg');
business_3.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/birite_food/birite_food_3.jpg'), filename: 'birite_food/birite_food_3.jpg');
business_3.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/birite_food/birite_food_4.jpg'), filename: 'birite_food/birite_food_4.jpg');

business_4.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/yogurt_park_food/yogurtpark_food_1.jpg'), filename: 'yogurt_park_food/yogurtpark_food_1.jpg');
business_4.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/yogurt_park_food/yogurtpark_food_2.jpg'), filename: 'yogurt_park_food/yogurtpark_food_2.jpg');
business_4.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/yogurt_park_food/yogurtpark_food_3.jpg'), filename: 'yogurt_park_food/yogurtpark_food_3.jpg');
business_4.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/yogurt_park_food/yogurtpark_food_4.JPG'), filename: 'yogurt_park_food/yogurtpark_food_4.JPG');

business_5.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/iscream_food/iscream_food_1.jpg'), filename: 'iscream_food/iscream_food_1.jpg');
business_5.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/iscream_food/iscream_food_2.jpg'), filename: 'iscream_food/iscream_food_2.jpg');
business_5.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/iscream_food/iscream_food_3.jpg'), filename: 'iscream_food/iscream_food_3.jpg');
business_5.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/iscream_food/iscream_food_4.jpg'), filename: 'iscream_food/iscream_food_4.jpg');

business_6.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_dewies_food/mrdewies_food_1.jpg'), filename: 'mr_dewies_food/mrdewies_food_1.jpg');
business_6.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_dewies_food/mrdewies_food_2.jpg'), filename: 'mr_dewies_food/mrdewies_food_2.jpg');
business_6.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_dewies_food/mrdewies_food_3.jpeg'), filename: 'mr_dewies_food/mrdewies_food_3.jpeg');
business_6.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_dewies_food/mrdewies_food_4.jpeg'), filename: 'mr_dewies_food/mrdewies_food_4.jpeg');

business_7.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mitchells_food/mitchells_food_1.jpeg'), filename: 'mitchells_food/mitchells_food_1.jpeg');
business_7.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mitchells_food/mitchells_food_2.jpg'), filename: 'mitchells_food/mitchells_food_2.jpg');
business_7.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mitchells_food/mitchells_food_3.jpg'), filename: 'mitchells_food/mitchells_food_3.jpg');
business_7.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mitchells_food/mitchells_food_4.jpg'), filename: 'mitchells_food/mitchells_food_4.jpg');

business_8.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/garden_creamery_food/gardencreamery_food_1.jpeg'), filename: 'garden_creamery_food/gardencreamery_food_1.jpeg');
business_8.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/garden_creamery_food/gardencreamery_food_2.jpg'), filename: 'garden_creamery_food/gardencreamery_food_2.jpg');
business_8.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/garden_creamery_food/gardencreamery_food_3.jpg'), filename: 'garden_creamery_food/gardencreamery_food_3.jpg');
business_8.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/garden_creamery_food/gardencreamery_food_4.jpg'), filename: 'garden_creamery_food/gardencreamery_food_4.jpg');

business_9.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/ghirarhelli_food/ghirardelli_food_1.jpeg'), filename: 'ghirarhelli_food/ghirardelli_food_1.jpeg');
business_9.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/ghirarhelli_food/ghirardelli_food_2.jpg'), filename: 'ghirarhelli_food/ghirardelli_food_2.jpg');
business_9.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/ghirarhelli_food/ghirardelli_food_3.jpg'), filename: 'ghirarhelli_food/ghirardelli_food_3.jpg');
business_9.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/ghirarhelli_food/ghirardelli_food_4.jpg'), filename: 'ghirarhelli_food/ghirardelli_food_4.jpg');

business_10.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/almare_food/almare_food_1.jpeg'), filename: 'almare_food/almare_food_1.jpeg');
business_10.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/almare_food/almare_food_2.jpeg'), filename: 'almare_food/almare_food_2.jpeg');
business_10.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/almare_food/almare_food_3.jpg'), filename: 'almare_food/almare_food_3.jpg');
business_10.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/almare_food/almare_food_4.jpg'), filename: 'almare_food/almare_food_4.jpg');

business_11.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/secret_scoop_food/secretscoop_food_1.jpg'), filename: 'secret_scoop_food/secretscoop_food_1.jpg');
business_11.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/secret_scoop_food/secretscoop_food_2.jpg'), filename: 'secret_scoop_food/secretscoop_food_2.jpg');
business_11.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/secret_scoop_food/secretscoop_food_3.jpg'), filename: 'secret_scoop_food/secretscoop_food_3.jpg');
business_11.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/secret_scoop_food/secretscoop_food_4.jpg'), filename: 'secret_scoop_food/secretscoop_food_4.jpg');

business_12.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/caravaggio_food/caravaggio_food_1.jpeg'), filename: 'caravaggio_food/caravaggio_food_1.jpeg');
business_12.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/caravaggio_food/caravaggio_food_2.jpg'), filename: 'caravaggio_food/caravaggio_food_2.jpg');
business_12.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/caravaggio_food/caravaggio_food_3.jpg'), filename: 'caravaggio_food/caravaggio_food_3.jpg');
business_12.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/caravaggio_food/caravaggio_food_4.jpg'), filename: 'caravaggio_food/caravaggio_food_4.jpg');

business_13.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/lush_gelato_food/lush_food_1.jpg'), filename: 'lush_gelato_food/lush_food_1.jpg');
business_13.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/lush_gelato_food/lush_food_2.jpg'), filename: 'lush_gelato_food/lush_food_2.jpg');
business_13.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/lush_gelato_food/lush_food_3.jpg'), filename: 'lush_gelato_food/lush_food_3.jpg');
business_13.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/lush_gelato_food/lush_food_4.jpg'), filename: 'lush_gelato_food/lush_food_4.jpg');

business_14.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/cookiebar_food/cookiebar_food_1.jpg'), filename: 'cookiebar_food/cookiebar_food_1.jpg');
business_14.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/cookiebar_food/cookiebar_food_2.jpg'), filename: 'cookiebar_food/cookiebar_food_2.jpg');
business_14.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/cookiebar_food/cookiebar_food_3.jpg'), filename: 'cookiebar_food/cookiebar_food_3.jpg');
business_14.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/cookiebar_food/cookiebar_food_4.jpg'), filename: 'cookiebar_food/cookiebar_food_4.jpg');

business_15.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_mrs_misc_food/mrandmrsmisc_food_1.jpg'), filename: 'mr_mrs_misc_food/mrandmrsmisc_food_1.jpg');
business_15.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_mrs_misc_food/mrandmrsmisc_food_2.jpg'), filename: 'mr_mrs_misc_food/mrandmrsmisc_food_2.jpg');
business_15.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_mrs_misc_food/mrandmrsmisc_food_3.jpg'), filename: 'mr_mrs_misc_food/mrandmrsmisc_food_3.jpg');
business_15.food_photos.attach(io: open('https://app-scoop-seed.s3-us-west-1.amazonaws.com/mr_mrs_misc_food/mrandmrsmisc_food_4.jpg'), filename: 'mr_mrs_misc_food/mrandmrsmisc_food_4.jpg');