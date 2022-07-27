class ChangeColumnDefaultInReminders < ActiveRecord::Migration[6.1]
  def change
    change_column_default :reminders, :is_completed, false
    change_column_default :reminders, :is_reminded, false

  end
end
