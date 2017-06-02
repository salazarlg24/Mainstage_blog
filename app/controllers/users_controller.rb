sublclass UsersController < ApplicationController
	def index
	end

	def new
	end

	def login
	@user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
		if (@user)
			session[:user_id] = @user.id
			redirect_to "/blogs"

		else
		flash[:error] = "User information not found. Please try again." 
		redirect_to :back	
		end
	end

	def register
		@user = User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
	  	if @user.valid?
	  		session[:user_id] = @user.id
	  		puts 'User created'
	  		redirect_to "/blog"		  	
		else
			flash[:errors] = @user.errors.full_messages 
			redirect_to :back
		end
	end

	def logout
		session.clear
	redirect_to '/'
	end

end
