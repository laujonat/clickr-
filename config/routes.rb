Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: %i(create destroy)
    resources :photos
    resources :comments
    resources :albums
    resources :tags
  end
end
