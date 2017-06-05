class BlogController < ApplicationController
  def index
  	@comments = Comment.where(blog: 1)
  	@user = User.find(session[:user_id])
  end
end
