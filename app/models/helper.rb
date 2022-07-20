class Helper < ApplicationRecord
    has_many :user_helpers
    has_many :users, through: :user_helpers
end
