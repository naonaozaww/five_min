class TestAdd < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :board_id, :integer
    add_column :events, :week_number, :integer
    add_column :tests, :mode_number, :integer
  end
end
