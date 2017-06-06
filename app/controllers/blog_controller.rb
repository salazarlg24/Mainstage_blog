class BlogController < ApplicationController
  def index
  	@comments = Comment.where(blog: 1).order('created_at DESC')
  	@user = User.find(session[:user_id])
  end
end
