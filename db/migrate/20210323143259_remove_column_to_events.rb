class RemoveColumnToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :name, :string
  end

  def down
    remove_column :events, :type, :string
  end
end
