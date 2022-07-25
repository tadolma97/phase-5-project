class HelpersController < ApplicationController
    def index
        render json: Helper.all 
    end

    def create
        helper=Helper.create!(helper_params)
        user_helper=UserHelper.create!(helper_id: helper.id, user_id: params[:user_id])
        render json: helper

    end

    private
    def helper_params
        params.permit(:first_name, :last_name, :email, :user_id)
    end
end
