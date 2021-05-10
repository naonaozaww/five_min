class AddColumnDobules < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :mode_number, :integer
    add_column :events, :event_id, :integer
    add_column :tests, :mode_id, :integer
  end
end
