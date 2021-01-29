class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :commenter_id
      t.text :body
      t.references :photo, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end