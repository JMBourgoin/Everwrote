class AddTagsColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :author_id, :integer, null: false
    add_column :tags, :name, :string, null: false
  end
end
