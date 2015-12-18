class CreateJackets < ActiveRecord::Migration
  def change
    create_table :jackets do |t|
      t.string :image_url
      t.string :link_url
      t.integer :color
      t.boolean :h
      t.boolean :st
      t.boolean :tg
      t.boolean :tc
      t.boolean :oc
      t.boolean :ot

      t.timestamps null: false
    end
  end
end
