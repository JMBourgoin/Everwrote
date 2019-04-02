class AddNotesIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :notes, :author_id
    add_index :notes, :notebook_id
  end
end
