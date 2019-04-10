class Note < ApplicationRecord
  validates :title, :body, :author_id, :notebook_id, presence: true

  belongs_to :author,
  class_name: :User,
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :notebook,
  class_name: :Notebook,
  primary_key: :id,
  foreign_key: :notebook_id

  has_many :joins, dependent: :destroy
  
end