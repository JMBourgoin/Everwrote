Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy]
    resource :session, only: [:create, :show, :destroy]
    resources :notebooks
    resources :notes
    resources :tags, only: [:index, :show, :create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
