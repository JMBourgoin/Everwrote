class Join < ApplicationRecord
    validates :note_id, :tag_id, presence: true

    belongs_to :tag,
    class_name: :Tag,
    foreign_key: :tag_id,
    primary_key: :id

    belongs_to :note,
    class_name: :Note,
    foreign_key: :note_id,
    primary_key: :id
end