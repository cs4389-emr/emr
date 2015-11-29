class Patient < ActiveRecord::Base
  belongs_to :primary_physician
end
