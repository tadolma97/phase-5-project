class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def index
        users = User.all 
        render json: users
    end
    # def create
    #     @user = User.create!(user_params)
    #     session[:user_id] = user.id
    #     render json: user, status: :created
    # end
    def create
        @user = User.new(user_params)
        if @user.save
          UserMailer.with(user: @user).welcome_email.deliver_later
    
          render json: @user, status: :accepted
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
        end
      end

    def show
        render json: @current_user
    end
    
    def events
      user= User.find(params[:id])
      events=user.events
      eventValid=[]
      events.each do |event|
        if Time.zone.today.between?(event.start_date, event.end_date)
          eventValid.push(event)
        end
      end
      render json: eventValid
    end


    private
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

    
end
