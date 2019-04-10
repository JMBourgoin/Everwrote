class Api::JoinsController < ApplicationController
    def index
        @note_tags = NoteTag.all
        render :index
    end
    
    def create
        @note_tag = NoteTag.new(note_tag_params)
        @note_tag.save
    end

    def destroy
        @note_tag.find(params[:id])
        @note_tag.destroy
    end
end