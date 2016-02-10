class CityController < ApplicationController

    def show
    contact = Contact.find_by(id: params[:id])
    if contact
      respond_with :api, contact # contact.to_json
    else
      respond_with(:api, {status: "404", message: "Could not find contact with id " + params[:id]})
    end
  end
end
