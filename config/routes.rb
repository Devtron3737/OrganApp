Rails.application.routes.draw do
  root 'static_pages#action'

  namespace :api do
    resources :tracks, only: [:create, :destroy, :index]
  end
end
