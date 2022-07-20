class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :image
      t.date :start_date
      t.date :end_date
      t.boolean :is_recurring
      t.string :recurrence_pattern
      t.integer :user_id
      t.integer :helper_id
      t.time :time 

      t.timestamps
    end
  end
end
