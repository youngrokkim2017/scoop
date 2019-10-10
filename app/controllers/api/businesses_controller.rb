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
        debugger
        search = params[:search]
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

#     def index
    
#       bounds = params[:filters][:bounds]
#       near = params[:filters][:near]
#       find = params[:filters][:find]
#     if near.downcase == "sf"
#       near = "san francisco"
#     end

#     if find.downcase == "sd"
#       near = "san diego"
#     end

#     bound_filter = Business.in_bounds(bounds) if bounds
  
#     # debugger
#     if near != "" && find != ""
#       @businesses = Business.in_location(near)
#       @finds = Business.find_business(find)
#       @businesses = @businesses.select { |business| @finds.include?(business) }
#       @businesses = @businesses.select { |business| bound_filter.include?(business) } if !bound_filter.nil?
#     elsif near && find == ""
#       @businesses = Business.in_location(near) 
#       @businesses = @businesses.select { |business| bound_filter.include?(business) } if !bound_filter.nil?
#     elsif find && near == ""
#       @businesses = Business.find_business(find) 
#       @businesses = @businesses.select { |business| bound_filter.include?(business) } if !bound_filter.nil?
#     end
#       # debugger
#     render :index
#   end

#   def show
#     @business = Business.find_by(id: params[:id])
#     render :show
#   end

#   def search 
#     query = params[:query]
#     if query.length > 1 
#       @businesses = Business.where('lower(name) LIKE ?', "%#{query.downcase}%" )
#       @businesses = @businesses[0..4]
#       render :index
#     else
#       @businesses = Business.none
#       render :index
#     end
  
#   end
