class Api::ReviewsController < ApplicationController
    def index
        @reviews = Business.find_by(id: params[:business_id]).reviews
        
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
            render :show
        else
            render @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.user_id != current_user.id
            render :show
        elsif @review.update_attribute(review_params)
            render :show
        else
            render @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review
            @review.destroy
            render :show
        else
            render @review.errors.full_messages, status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :business_id, :body, :rating)
    end
end