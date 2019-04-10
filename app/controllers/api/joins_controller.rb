class Api::JoinsController < ApplicationController
    def index
        @joins = Join.all
        render :index
    end
    
    def create
        @join = Join.new(joins_params)
        @join.save
        render :show
    end

    def destroy
        @join.find(params[:id])
        @join.destroy
    end

    def joins_params 
        params.require(:join).permit(:note_id, :tag_id)
    end
end