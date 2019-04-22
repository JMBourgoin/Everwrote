class AddTagsColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :author_id, :integer, null: false
  end
end
