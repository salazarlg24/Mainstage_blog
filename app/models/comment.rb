class Comment < ApplicationRecord
	belongs_to :user
	belongs_to :blog

	validates :comment, presence: true, length: {minimum: 8}

end
