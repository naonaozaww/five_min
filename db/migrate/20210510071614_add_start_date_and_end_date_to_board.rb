class AddStartDateAndEndDateToBoard < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :start_date, :datetime, null: false
    add_column :boards, :end_date, :datetime, null: false
  end
end
