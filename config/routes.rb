Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses do
      resources :reviews
    end
    # get '/search', to: 'businesses#search'
    get '/businesses/search/:input', to: 'businesses#search'
  end

  root 'static_pages#root'
end
