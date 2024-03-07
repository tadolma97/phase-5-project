class UserHelpersController < ApplicationController
    def index
        render json: UserHelper.all
    end
end
