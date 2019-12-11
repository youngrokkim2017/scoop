json.partial! "api/users/user", user: @user
# json.id @user.id
# json.firstName @user.first_name
# json.lastName @user.last_name
# json.email @user.email
# json.userReviews @user.reviews.length
# json.photoUrl url_for(@user.photo)
json.photoUrl @user.photo.attached? ? url_for(@user.photo) : ''