class CreateUserHelpers < ActiveRecord::Migration[6.1]
  def change
    create_table :user_helpers do |t|
      t.integer :user_id
      t.integer :helper_id

      t.timestamps
    end
  end
end
