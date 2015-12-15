class CreateTies < ActiveRecord::Migration
  def change
    create_table :ties do |t|
      t.string :image_url
      t.string :link_url
      t.integer :category
      t.boolean :tidimi
      t.boolean :misogi

      t.timestamps null: false
    end
  end
end
