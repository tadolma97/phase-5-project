class UserMailer < ApplicationMailer
    default from: "readyhealthpartner@gmail.com"

    def welcome_email
        @user=params[:user]
        mail(to:@user.email, subject: 'Welcome to Health Partner!')
    end

    # def reminder_email
    #     @user=params[:user]
    #     mail(to:@user.email, subject: 'Here are the medicines you need to take today!')
    # end
end
