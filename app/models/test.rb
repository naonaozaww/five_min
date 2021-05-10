class Test < ApplicationRecord
  has_many :boards, through: :events
  has_many :events
end
