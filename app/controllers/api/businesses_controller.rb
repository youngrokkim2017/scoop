class Api::BusinessesController < ApplicationController
    def index
        # @businesses = Business.in_bounds(param[:bounds])
        @businesses = Business.all
        
        render :index
    end

    def create
        @business = Business.new(business_params)

        if @business.save
            render :show
        else
            render json: @business.errors.full_messages, status: 404
        end
    end

    def show
        @business = Business.find_by(id: params[:id])
        # @business = Business.find(params[:id])

        if @business
            # render "api/businesses/show"
            render :show
        else
            # debugger
            render json: @business.errors.full_messages, status: 404
        end
    end

    # debugger
    def search
        # debugger
        @businesses = Business.where('LOWER(name) LIKE ?', "%#{search}%")

        if @businesses.length < 1
            @businesses = Business.all
        end

        render :index
    end

    private
    def business_params
        params.require(:business).permit(:description, :lat, :lng)
    end
end
