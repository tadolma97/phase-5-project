class Event < ApplicationRecord
    has_many :reminders, dependent: :destroy
    belongs_to :user
end
