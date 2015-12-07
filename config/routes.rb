Rails.application.routes.draw do
  root 'static_pages#action'

  namespace :api, defaults: {format: :json} do
    resources :tracks, only: [:create, :destroy, :index]
  end
end
