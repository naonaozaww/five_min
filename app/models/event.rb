class Event < ApplicationRecord
  belongs_to :board
  belongs_to :test
  #validates :title, presence: true
  #validates :start_date, presence: true
  #validates :end_date, presence: true
  #validate :start_end_check

# 時系列のバリデーションはこれでいけそう
  def start_end_check
    errors.add(:end_date, "の日付を正しく記入してください。") unless self.start_date < self.end_date
  end
end
