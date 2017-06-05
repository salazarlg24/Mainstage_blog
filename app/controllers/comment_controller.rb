class CommentController < ApplicationController
	def create
		user = User.find(session[:user_id])
		Comment.create(comment: params[:comment], user: user, blog: 1)
		redirect_to :back
	end
end
