class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true

  # belongs_to :user,
  # class_name: :User,
  # foreign_key: :user_id
  
end