Rails.application.routes.draw do
  
  resources :reminders
  resources :events
  resources :user_helpers
  resources :helpers
  resources :users
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/user/:id/events", to: "users#events"
  patch '/completed', to: "events#reminder_update"
  get '/event/:id/reminder', to: "events#reminder"
  get "/user/:id/helpers", to: "users#helpers"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
