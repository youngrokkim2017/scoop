json.extract! user, :id, :first_name, :last_name, :email
json.photoUrl url_for(user.photo) if user.photo.attached?