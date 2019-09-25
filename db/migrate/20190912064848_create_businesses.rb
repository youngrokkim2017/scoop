class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.string :website, null: false
      t.string :description, null: false
      t.string :phone_number, null: false 
      t.string :price_range, null: false
      t.string :credit_card, null: false
      t.string :parking, null: false
      t.string :wifi, null: false
      t.string :restroom, null: false
      t.string :category, null: false
      t.string :open_time, null: false
      t.string :close_time, null: false
      t.integer :rating, null: false
      t.integer :lat, null: false
      t.integer :lng, null: false

      t.timestamps
    end
  end
end
