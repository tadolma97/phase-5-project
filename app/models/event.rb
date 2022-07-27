class Event < ApplicationRecord
    has_many :reminders
    belongs_to :user
end
