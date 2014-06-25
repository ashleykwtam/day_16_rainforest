class User < ActiveRecord::Base

  has_many :reviews
  has_many :products, through: :reviews

  validates :email, :presence => true
  has_secure_password

  validates_presence_of :name
end
