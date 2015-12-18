class ItemsController < ApplicationController
  def jackets
    @items = Jacket.where(color: 0)
  end

  def api
    # @items = Item.all
    # respond_to do |format|
    #   format.json { render json: @items }
    # end
  end

end
