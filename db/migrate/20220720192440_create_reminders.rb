class CreateReminders < ActiveRecord::Migration[6.1]
  def change
    create_table :reminders do |t|
      t.boolean :is_completed
      t.boolean :is_reminded
      t.integer :event_id
      t.timestamps
    end
  end
end
