class RemoveColumnToTests < ActiveRecord::Migration[5.2]
  def change
    add_column :tests, :name, :string
  end

  def down
    remove_column :tests, :type, :string
  end
end
