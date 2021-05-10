class RemoveColumn < ActiveRecord::Migration[5.2]
  def down
    remove_column :events, :name, :string
    remove_column :events, :type, :string
    remove_column :events, :board_id, :integer
  end
end
