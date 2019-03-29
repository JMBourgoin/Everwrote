class DropNotebooks < ActiveRecord::Migration[5.2]
  def change
    drop_table :notebooks
  end
end
