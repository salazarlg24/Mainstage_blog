Rails.application.routes.draw do
	# ************ BLOG ROUTES *****************
	get 'comment/index'

	# ************ BLOG ROUTES *****************
	root => 'users#index'

	get 'users/new' => 'users#new'

	post => '/register' => 'users#register'

	post "/login" => 'blogs#login'

	# ************ USER ROUTES *****************
	get 'users/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
