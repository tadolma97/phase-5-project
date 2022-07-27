class RemindersController < ApplicationController
    def index
        render json: Reminder.all
    end
    def update
        reminder=Reminder.find(params[:id])
        reminder.update(update_params)
        render json: event
    end
end
