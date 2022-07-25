class AddUserIdToHelper < ActiveRecord::Migration[6.1]
  def change
    add_column :helpers, :user_id, :integer
  end
end
