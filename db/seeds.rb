# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'password')
#Helper.create(first_name: 'Helper', last_name: 'Best', email: 'helper@example.com')
# UserHelper.create(user_id: 1, helper_id: 1)
# Event.create(name: "medicine", image: 'http://www.medicine.com/images/medicine.png', start_date: Date::strptime('05-12-2019',"%m-%d-%Y"), end_date: Date::strptime('05-12-2019',"%m-%d-%Y"),  is_recurring: true, recurrence_pattern: "daily", user_id: 1, helper_id: 1, time: 18)
# Event.create(name: "medicine63", image: 'http://www.medicine.com/images/medicine.png', start_date: '05-12-2019', end_date: '05-12-2019',  is_recurring: true, recurrence_pattern: "daily", user_id: 1, helper_id: 1, time: tim'18:00:00')