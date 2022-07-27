class EventsController < ApplicationController
    def index
        render json: Event.all
    end

    def create
        event=Event.create!(event_params)
        (event.start_date).upto(event.end_date).each do |day|
            Reminder.create(event_id: event.id, date: day)
          end
        render json: event 
    end

    def destroy
        event=Event.find(params[:id])
        event.destroy
        head :no_content
    end

    def reminder_update
        event=Event.find(params[:id])
        reminder=event.reminders.find_by(date: Time.zone.today)
        reminder.update(reminder_params)
        render json: reminder

    end

    

    private 

    def event_params
        params.permit(:name, :image, :start_date, :end_date, :is_recurring, :recurrence_pattern, :user_id, :helper_id, :id, :time)
    end
    def reminder_params
        params.permit(:is_completed)
    end
end
