class RemoveUserIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :notes, :author_id
    remove_index :notes, :notebook_id
  end
end
