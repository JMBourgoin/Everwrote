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
        @join = Join.find(params[:id])
        @join.destroy
        render json: { id: @join.id }
    end

    def joins_params 
        params.require(:join).permit(:note_id, :tag_id)
    end
end