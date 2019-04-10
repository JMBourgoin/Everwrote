class NoteTag < ApplicationRecord
    validates :note_id, :tag_id, presence: true
end