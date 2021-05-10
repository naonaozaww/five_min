class TestAddColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :tests, :event_id, :integer
  end
end
