Rails.application.routes.draw do
	# ************ COMMENT ROUTES *****************
	post '/comments' => 'comment#create'

	# ************ BLOG ROUTES *****************

	get '/blogs' => 'blog#index'

	# ************ USER ROUTES *****************

	root 'users#index'

	get 'users/new' => 'users#new'

	post '/register' => 'users#register'

	post "/login" => 'users#login'

	get '/logout' => 'users#logout'

end
