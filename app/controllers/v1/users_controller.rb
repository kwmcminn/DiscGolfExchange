class V1::UsersController < ApplicationController

   def index
      render json: { users: [
         {
            name: "Kevin",
            age: 30
         }
         ]}
   end
end
