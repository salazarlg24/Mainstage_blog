class User < ApplicationRecord
	has_secure_password

	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

	validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
	validates :first_name, :last_name, presence: true
	validates :password, :password_confirmation, presence: true, length: {minimum: 8}

	has_many :blogs
	has_many :comments


	before_save :email_lowercase

	def email_lowercase
		email.downcase!
	end
end
