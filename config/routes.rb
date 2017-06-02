Rails.application.routes.draw do
	# ************ COMMENT ROUTES *****************
	get 'comment/index'

	# ************ BLOG ROUTES *****************

	# ************ USER ROUTES *****************

	root 'users#index'

	get 'users/new' => 'users#new'

	post '/register' => 'users#register'

	post "/login" => 'users#login'

end
