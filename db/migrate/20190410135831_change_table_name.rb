class ChangeTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :note_tags, :joins
  end
end
