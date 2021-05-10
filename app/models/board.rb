class Board < ApplicationRecord
  has_many :events
  has_many :tests, through: :events
end
