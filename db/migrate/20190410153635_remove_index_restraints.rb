class RemoveIndexRestraints < ActiveRecord::Migration[5.2]
  def change
    remove_index :joins, :note_id
    remove_index :joins, :tag_id
  end
end
