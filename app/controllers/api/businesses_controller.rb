class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.in_bounds(param[:bounds])
    end

    def create
        @business = Business.new(business_params)

        if @business.save
            render :show
        else
            render json: @business.error.full_messages, status: 404
        end
    end

    def show
        @business = Business.find(params[:id])

        if @business
            render "api/businesses/show"
        else
            render json: @business.error.full_messages, status: 404
        end
    end

    private
    def business_params
        params.require(:business).permit(:description, :lat, :lng)
    end
end
