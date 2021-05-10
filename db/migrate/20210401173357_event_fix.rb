class EventFix < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :title, :string
    remove_column :events, :body, :string
    remove_column :events, :mode_number, :integer
    remove_column :events, :event_id, :integer
    remove_column :tests, :mode_id, :integer
  end
end
