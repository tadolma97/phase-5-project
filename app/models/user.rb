class User < ApplicationRecord
    has_many :user_helpers, dependent: :destroy
    has_many :helpers, through: :user_helpers
    has_secure_password

end
