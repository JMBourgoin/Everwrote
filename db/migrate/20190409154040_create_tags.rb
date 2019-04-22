class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :author_id, null: false
      t.string :name, :string, null: false
      t.timestamps
    end
    add_index :tags, :user_id, unique: true
  end
end
