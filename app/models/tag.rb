class Tag < ApplicationRecord
    validates :name, :author_id, presence: true

    belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

    has_many :joins, dependent: :destroy
end