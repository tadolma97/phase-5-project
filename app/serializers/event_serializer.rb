class EventSerializer < ActiveModel::Serializer
    attributes :id, :name, :image, :start_date, :end_date, :is_recurring, 
    :recurrence_pattern, :user_id, :helper_id, :time, :created_at, :updated_at, :show_today_reminder

    def show_today_reminder
        self.object.reminders.find_by(date: Time.zone.today)
        
    end

  end
  