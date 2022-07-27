class AddDateToReminders < ActiveRecord::Migration[6.1]
  def change
    add_column :reminders, :date, :date
  end
end
