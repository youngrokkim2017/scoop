json.partial! "api/users/user", user: @user
# json.photoUrl url_for(@user.photo)
json.photoUrl @user.photo.attached? ? url_for(@user.photo) : ''