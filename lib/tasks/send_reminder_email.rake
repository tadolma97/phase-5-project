namespace :send_reminder_email do
    desc 'Sends daily email to user with all the medicine name that they have to take today'
    task day: :environment do
      User.all.each do |user|
        medicines=[]
        events=user.events
        events.each do |event|
          event.reminders.each do |reminder|
            if reminder.date==Time.zone.today
              medicines << reminder.event
            end
          end
        end
        puts "Start"
        
        medicines.each do |medicine|
          puts user.first_name
          UserMailer.with(user: user, medicine: medicine.name).reminder_email.deliver
        end
        puts "End"

      end
    end

  end
  