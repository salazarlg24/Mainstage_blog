class Comment < ApplicationRecord
	belongs_to :user

	validates :comment, presence: true, length: {minimum: 8}
end
