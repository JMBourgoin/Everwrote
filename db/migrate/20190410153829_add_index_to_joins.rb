class AddIndexToJoins < ActiveRecord::Migration[5.2]
  def change
    add_index :joins, :tag_id
    add_index :joins, :note_id
  end
end
