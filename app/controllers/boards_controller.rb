class BoardsController < ApplicationController
  def show
  end

  def new
    @board = Board.new
  end

  def create
    @board.new(board_params)
    @board.save
  end

  private

  def board_params
    params.require(:board).permit(:start_date, :end_date)
  end
end
