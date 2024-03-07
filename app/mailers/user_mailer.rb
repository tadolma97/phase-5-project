class UserMailer < ApplicationMailer
    default from: "readyhealthpartner@gmail.com"

    def welcome_email
        @user=params[:user]
        mail(to:@user.email, subject: 'Welcome to Health Partner!')
    end

    def reminder_email
        @user=params[:user]
        @event=params[:medicine]
        mail(to:@user.email, subject: 'Here are the medicines you need to take today!')
    end

    def alert_email
        @user=params[:user]
        @helper=params[:helper]
        @event=params[:medicine]
        mail(to:@helper.email, subject: 'Your Health Partner has not taken their medication!')
    end

end
