class EventAdd < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :event_id, :integer
  end
end
