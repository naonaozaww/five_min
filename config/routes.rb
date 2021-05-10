Rails.application.routes.draw do
  get 'top', to: 'home#top'
  
  resources :events
  resources :boards, only: %i[new create show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
